import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { submitContactForm } from '../services/formService'
import Input from '../components/shared/Input'
import TextArea from '../components/shared/TextArea'
import Select from '../components/shared/Select'
import Button from '../components/shared/Button'
import Card from '../components/shared/Card'

const ContactPage = () => {
  const { showToast } = useApp()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const subjectOptions = [
    { value: '', label: 'Vyberte předmět' },
    { value: 'general', label: 'Obecný dotaz' },
    { value: 'apartment', label: 'Dotaz na byt' },
    { value: 'tour', label: 'Prohlídka projektu' },
    { value: 'other', label: 'Jiné' },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Jméno je povinné'
    if (!formData.email.trim()) newErrors.email = 'Email je povinný'
    if (!formData.phone.trim()) newErrors.phone = 'Telefon je povinný'
    if (!formData.subject) newErrors.subject = 'Předmět je povinný'
    if (!formData.message.trim()) newErrors.message = 'Zpráva je povinná'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    try {
      await submitContactForm(formData)
      showToast('Formulář byl úspěšně odeslán', 'success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      showToast('Chyba při odesílání, zkuste to prosím znovu', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-24 pb-20 bg-neutral-offWhite min-h-screen">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="text-center mb-12">
          <p className="text-overline mb-4">Kontakt</p>
          <h1 className="text-h1 mb-4">Kontaktujte nás</h1>
          <p className="text-body-large max-w-2xl mx-auto text-neutral-mediumGray">
            Máte dotaz nebo zájem o byt? Neváhejte nás kontaktovat, rádi vám pomůžeme.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-6 lg:p-8">
              <h2 className="text-h2 mb-6">Kontaktní formulář</h2>
              <form onSubmit={handleSubmit}>
                <Input
                  label="Jméno"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                />
                <Input
                  label="E-mail"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />
                <Input
                  label="Telefon"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  required
                />
                <Select
                  label="Předmět"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  options={subjectOptions}
                  error={errors.subject}
                  required
                />
                <TextArea
                  label="Zpráva"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  required
                  rows={6}
                />
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? 'Odesílání...' : 'Odeslat zprávu'}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6">
              <h3 className="text-h3 mb-4">Kontaktní informace</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-body-small text-neutral-mediumGray mb-1">Telefon</p>
                  <a href="tel:+5435682625" className="text-body-regular text-primary-teal hover:underline">
                    +54 3568 26 25
                  </a>
                </div>
                <div>
                  <p className="text-body-small text-neutral-mediumGray mb-1">E-mail</p>
                  <a href="mailto:robert@luxgroup.us" className="text-body-regular text-primary-teal hover:underline">
                    robert@luxgroup.us
                  </a>
                </div>
                <div>
                  <p className="text-body-small text-neutral-mediumGray mb-1">Adresa</p>
                  <p className="text-body-regular">
                    Ecohau Riverside<br />
                    Praha, Česká republika
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-h3 mb-4">Otevírací hodiny</h3>
              <div className="space-y-2 text-body-regular">
                <div className="flex justify-between">
                  <span>Pondělí - Pátek</span>
                  <span className="font-semibold">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sobota</span>
                  <span className="font-semibold">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Neděle</span>
                  <span className="font-semibold">Zavřeno</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-h3 mb-4">Mapa</h3>
              <div className="aspect-video bg-neutral-lightGray rounded-lg flex items-center justify-center">
                <p className="text-body-small text-neutral-mediumGray">Mapa kanceláře</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage






