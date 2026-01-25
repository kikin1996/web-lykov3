export async function POST(request) {
  try {
    const data = await request.json()
    
    // Email adresa příjemce
    // POZOR: S testovacím emailem onboarding@resend.dev můžeš odesílat jen na email registrovaný v Resend účtu
    // Dočasně nastaveno na testovací email - po ověření domény změň zpět na: 'info@domypecerady.cz'
    const recipientEmail = process.env.RESEND_TEST_EMAIL || 'kristian.karas22@gmail.com'
    
    // Formátování emailu
    const subject = data.subject || 'Nová zpráva z webového formuláře'
    const body = formatEmailBody(data)
    const htmlBody = formatEmailBodyHTML(data)
    
    // Použití Resend API pro odesílání emailů
    // Pro produkci potřebujete nastavit RESEND_API_KEY v .env.local
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    
    console.log('RESEND_API_KEY exists:', !!RESEND_API_KEY)
    console.log('RESEND_API_KEY length:', RESEND_API_KEY ? RESEND_API_KEY.length : 0)
    
    if (RESEND_API_KEY) {
      // Odeslání přes Resend API
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'onboarding@resend.dev', // Testovací email - pro produkci použijte ověřenou doménu
          to: [recipientEmail],
          subject: subject,
          html: htmlBody,
          text: body,
        }),
      })
      
      if (!resendResponse.ok) {
        const errorData = await resendResponse.json()
        console.error('Resend API error:', errorData)
        console.error('Response status:', resendResponse.status)
        console.error('Response statusText:', resendResponse.statusText)
        
        // Pokud je chyba kvůli testovacímu emailu, poskytni lepší zprávu
        if (errorData.message && errorData.message.includes('testing emails')) {
          throw new Error('Pro odesílání na info@domypecerady.cz je potřeba ověřit doménu domypecerady.cz v Resend. Do té doby se emaily odesílají na testovací email. Přidej RESEND_TEST_EMAIL=twuj_email@example.com do .env.local pro dočasné testování.')
        }
        
        throw new Error(errorData.message || 'Chyba při odesílání emailu přes Resend: ' + JSON.stringify(errorData))
      }
      
      const result = await resendResponse.json()
      console.log('Email sent successfully via Resend:', result)
    } else {
      // Fallback: pokud není nastaven API klíč, použijeme mailto link
      // V produkci byste měli mít nastavený RESEND_API_KEY
      console.warn('RESEND_API_KEY není nastaven. Email nebyl odeslán.')
      console.log('Email would be sent to:', recipientEmail)
      console.log('Subject:', subject)
      console.log('Body:', body)
      
      // Pro vývoj můžete použít mailto link
      const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      console.log('Mailto link:', mailtoLink)
    }
    
    return Response.json({ 
      success: true, 
      message: 'Formulář byl úspěšně odeslán'
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return Response.json(
      { success: false, message: 'Chyba při odesílání formuláře: ' + error.message },
      { status: 500 }
    )
  }
}

function formatEmailBody(data) {
  let body = 'Nová zpráva z webového formuláře\n\n'
  
  if (data.firstName || data.lastName) {
    body += `Jméno: ${data.firstName || ''} ${data.lastName || ''}\n`
  }
  if (data.name) {
    body += `Jméno: ${data.name}\n`
  }
  if (data.email) {
    body += `Email: ${data.email}\n`
  }
  if (data.phone) {
    body += `Telefon: ${data.phone}\n`
  }
  if (data.date) {
    body += `Datum: ${data.date}\n`
  }
  if (data.time) {
    body += `Čas: ${data.time}\n`
  }
  if (data.apartment) {
    body += `Byt/Dům: ${data.apartment}\n`
  }
  if (data.message) {
    body += `\nZpráva:\n${data.message}\n`
  }
  
  body += '\n---\n'
  body += 'Developer: NIKASTAR s.r.o.\n'
  body += 'Adresa: Kmochova 858/11, Smíchov, 150 00 Praha\n'
  
  return body
}

function formatEmailBodyHTML(data) {
  let html = '<h2>Nová zpráva z webového formuláře</h2>'
  html += '<table style="border-collapse: collapse; width: 100%; max-width: 600px;">'
  
  if (data.firstName || data.lastName) {
    html += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Jméno:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.firstName || ''} ${data.lastName || ''}</td></tr>`
  }
  if (data.name) {
    html += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Jméno:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.name}</td></tr>`
  }
  if (data.email) {
    html += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td></tr>`
  }
  if (data.phone) {
    html += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Telefon:</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>`
  }
  if (data.date) {
    html += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Datum:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.date}</td></tr>`
  }
  if (data.time) {
    html += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Čas:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.time}</td></tr>`
  }
  if (data.apartment) {
    html += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Byt/Dům:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.apartment}</td></tr>`
  }
  if (data.message) {
    html += `<tr><td colspan="2" style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Zpráva:</td></tr>`
    html += `<tr><td colspan="2" style="padding: 8px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${data.message.replace(/\n/g, '<br>')}</td></tr>`
  }
  
  html += '</table>'
  html += '<hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">'
  html += '<p style="color: #666; font-size: 12px;">'
  html += '<strong>Developer:</strong> NIKASTAR s.r.o.<br>'
  html += '<strong>Adresa:</strong> Kmochova 858/11, Smíchov, 150 00 Praha'
  html += '</p>'
  
  return html
}

