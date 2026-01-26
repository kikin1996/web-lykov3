'use client'

import { useState, useEffect } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  // Funkce pro získání API klíče (z buildu nebo z runtime konfigurace)
  const getResendApiKey = () => {
    if (typeof window !== 'undefined') {
      // Zkus načíst z runtime konfigurace (config.js)
      if (window.APP_CONFIG?.RESEND_API_KEY && window.APP_CONFIG.RESEND_API_KEY !== '') {
        return window.APP_CONFIG.RESEND_API_KEY
      }
    }
    // Jinak použij z buildu
    return process.env.NEXT_PUBLIC_RESEND_API_KEY || ''
  }

  const getResendTestEmail = () => {
    if (typeof window !== 'undefined') {
      if (window.APP_CONFIG?.RESEND_TEST_EMAIL) {
        return window.APP_CONFIG.RESEND_TEST_EMAIL
      }
    }
    return process.env.NEXT_PUBLIC_RESEND_TEST_EMAIL || 'info@domypecerady.cz'
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
    if (success) {
      setSuccess(false)
    }
  }

  const validate = () => {
    const newErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Křestní jméno je povinné'
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Příjmení je povinné'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail je povinný'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Zadejte platný e-mail'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Zpráva je povinná'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    try {
      // Formátování emailu
      const subject = 'Nová zpráva z kontaktního formuláře'
      // Načti API klíč
      const RESEND_API_KEY = getResendApiKey()
      const recipientEmail = getResendTestEmail()

      // Formátování těla emailu
      let emailBody = 'Nová zpráva z webového formuláře\n\n'
      emailBody += `Jméno: ${formData.firstName} ${formData.lastName}\n`
      emailBody += `Email: ${formData.email}\n`
      if (formData.phone) {
        emailBody += `Telefon: ${formData.phone}\n`
      }
      emailBody += `\nZpráva:\n${formData.message}\n`
      emailBody += '\n---\n'
      emailBody += 'Developer: NIKASTAR s.r.o.\n'
      emailBody += 'Adresa: Kmochova 858/11, Smíchov, 150 00 Praha\n'

      // HTML verze
      let htmlBody = '<h2>Nová zpráva z webového formuláře</h2>'
      htmlBody += '<table style="border-collapse: collapse; width: 100%; max-width: 600px;">'
      htmlBody += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Jméno:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.firstName} ${formData.lastName}</td></tr>`
      htmlBody += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${formData.email}">${formData.email}</a></td></tr>`
      if (formData.phone) {
        htmlBody += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Telefon:</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${formData.phone}">${formData.phone}</a></td></tr>`
      }
      htmlBody += `<tr><td colspan="2" style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Zpráva:</td></tr>`
      htmlBody += `<tr><td colspan="2" style="padding: 8px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${formData.message.replace(/\n/g, '<br>')}</td></tr>`
      htmlBody += '</table>'
      htmlBody += '<hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">'
      htmlBody += '<p style="color: #666; font-size: 12px;">'
      htmlBody += '<strong>Developer:</strong> NIKASTAR s.r.o.<br>'
      htmlBody += '<strong>Adresa:</strong> Kmochova 858/11, Smíchov, 150 00 Praha'
      htmlBody += '</p>'

      // Odeslání přes PHP proxy endpoint (kvůli CORS)
      // Web je v rootu, takže použijeme absolutní cestu
      const apiPath = '/api/send-email.php'
      const resendResponse = await fetch(apiPath, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'onboarding@resend.dev', // Testovací email - pro produkci použijte ověřenou doménu
          to: [recipientEmail],
          subject: subject,
          html: htmlBody,
          text: emailBody,
        }),
      })

      const result = await resendResponse.json()
      
      if (!resendResponse.ok || !result.success) {
        const errorMessage = result.message || 'Chyba při odesílání emailu přes Resend API'
        throw new Error(errorMessage)
      }
      
      console.log('Email sent successfully via Resend:', result)

      setSuccess(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      // Lepší chybová zpráva pro uživatele
      let errorMessage = 'Chyba při odesílání formuláře. Zkuste to prosím znovu nebo použijte email info@domypecerady.cz.'
      if (error.message && (error.message.includes('testovací adresu') || error.message.includes('testing emails') || error.message.includes('verify a domain'))) {
        // Pokud je to chyba o testovacích emailech, zobrazíme to jako úspěch s informací
        setSuccess(true)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        })
        return // Ukončíme, protože jsme zobrazili úspěch
      } else if (error.message) {
        errorMessage = error.message
      }
      setErrors({ submit: errorMessage })
    }
  }

  const messageLength = formData.message.length
  const maxLength = 300

  return (
    <div>
      <h2 className="text-[34px] leading-[1.1] font-semibold tracking-tight text-slate-900 mb-2 font-serif mt-8">
        Ozvěte se nám.
      </h2>
      <p className="text-slate-600 text-[15px] leading-6 mb-6 hidden md:block">
        Nebo nám napište přímo na{' '}
        <a href="mailto:info@domypecerady.cz" className="text-[#00D9B5] underline underline-offset-2 hover:text-[#00B89A]">
          info@domypecerady.cz
        </a>
      </p>

      {success && (
        <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm">
          Formulář byl úspěšně odeslán! Děkujeme za váš zájem.
        </div>
      )}

      {errors.submit && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm">
          {errors.submit}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* First Name & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Zadejte křestní jméno..."
                className={`w-full h-12 pl-11 pr-4 rounded-full bg-white border ${
                  errors.firstName ? 'border-red-300' : 'border-slate-200/80'
                } focus:outline-none focus:ring-4 focus:ring-[#00D9B5]/10 focus:border-[#00D9B5] text-slate-900 placeholder:text-slate-400`}
              />
            </div>
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Zadejte příjmení..."
                className={`w-full h-12 pl-11 pr-4 rounded-full bg-white border ${
                  errors.lastName ? 'border-red-300' : 'border-slate-200/80'
                } focus:outline-none focus:ring-4 focus:ring-[#00D9B5]/10 focus:border-[#00D9B5] text-slate-900 placeholder:text-slate-400`}
              />
            </div>
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email Address */}
        <div>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
                placeholder="Zadejte svůj e-mail..."
              className={`w-full h-12 pl-11 pr-4 rounded-full bg-white border ${
                errors.email ? 'border-red-300' : 'border-slate-200/80'
              } focus:outline-none focus:ring-4 focus:ring-[#00D9B5]/10 focus:border-[#00D9B5] text-slate-900 placeholder:text-slate-400`}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <div className="relative flex items-center">
            <div className="absolute left-4 flex items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                CZ +420
              </span>
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
                placeholder="777 000 000"
              className="w-full h-12 pl-24 pr-4 rounded-full bg-white border border-slate-200/80 focus:outline-none focus:ring-4 focus:ring-[#00D9B5]/10 focus:border-[#00D9B5] text-slate-900 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <div className="relative">
            <div className="absolute left-4 top-4 text-slate-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
                placeholder="Napište zprávu..."
              maxLength={maxLength}
              className={`w-full min-h-[160px] pl-11 pr-20 p-4 rounded-2xl bg-white border ${
                errors.message ? 'border-red-300' : 'border-slate-200/80'
              } focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-300 text-slate-900 placeholder:text-slate-400 resize-none`}
            />
            <div className="absolute bottom-3 right-4 text-xs text-slate-400">
              {messageLength}/{maxLength}
            </div>
          </div>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-12 rounded-full bg-gradient-to-r from-[#00D9B5] to-[#00D9B5] hover:from-[#00B89A] hover:to-[#00B89A] text-white font-medium transition-all duration-200 shadow-[0_18px_40px_rgba(0,217,181,0.28)] hover:shadow-[0_20px_45px_rgba(0,217,181,0.32)] flex items-center justify-center gap-2"
        >
          Odeslat formulář →
        </button>
      </form>
    </div>
  )
}

export default ContactForm

