export const submitContactForm = async (data) => {
  try {
    // Formátování emailu pro PHP endpoint
    const recipientEmail = 'info@domypecerady.cz'
    let emailBody = 'Nová zpráva z kontaktního formuláře\n\n'
    emailBody += `Jméno: ${data.name || data.firstName || ''}\n`
    emailBody += `Email: ${data.email || ''}\n`
    if (data.phone) emailBody += `Telefon: ${data.phone}\n`
    if (data.message) emailBody += `\nZpráva:\n${data.message}\n`

    let htmlBody = '<h2>Nová zpráva z kontaktního formuláře</h2>'
    htmlBody += '<table style="border-collapse: collapse; width: 100%; max-width: 600px;">'
    htmlBody += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Jméno:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.name || data.firstName || ''}</td></tr>`
    htmlBody += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${data.email || ''}">${data.email || ''}</a></td></tr>`
    if (data.phone) {
      htmlBody += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Telefon:</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>`
    }
    if (data.message) {
      htmlBody += `<tr><td colspan="2" style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Zpráva:</td></tr>`
      htmlBody += `<tr><td colspan="2" style="padding: 8px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${data.message.replace(/\n/g, '<br>')}</td></tr>`
    }
    htmlBody += '</table>'

    const response = await fetch('/api/send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: [recipientEmail],
        subject: data.subject || 'Nová zpráva z kontaktního formuláře',
        html: htmlBody,
        text: emailBody,
      }),
    })
    
    const result = await response.json()
    
    if (!result.success) {
      throw new Error(result.message || 'Chyba při odesílání')
    }
    
    return result
  } catch (error) {
    console.error('Error submitting contact form:', error)
    throw error
  }
}

export const submitInterestForm = async (data) => {
  try {
    const recipientEmail = 'info@domypecerady.cz'
    let emailBody = 'Zájem o byt/dům\n\n'
    emailBody += `Jméno: ${data.name || ''}\n`
    emailBody += `Email: ${data.email || ''}\n`
    if (data.phone) emailBody += `Telefon: ${data.phone}\n`
    if (data.apartment) emailBody += `Byt/Dům: ${data.apartment}\n`
    if (data.message) emailBody += `\nZpráva:\n${data.message}\n`

    let htmlBody = '<h2>Zájem o byt/dům</h2>'
    htmlBody += '<table style="border-collapse: collapse; width: 100%; max-width: 600px;">'
    htmlBody += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Jméno:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.name || ''}</td></tr>`
    htmlBody += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${data.email || ''}">${data.email || ''}</a></td></tr>`
    if (data.phone) {
      htmlBody += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Telefon:</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>`
    }
    if (data.apartment) {
      htmlBody += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Byt/Dům:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.apartment}</td></tr>`
    }
    if (data.message) {
      htmlBody += `<tr><td colspan="2" style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Zpráva:</td></tr>`
      htmlBody += `<tr><td colspan="2" style="padding: 8px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${data.message.replace(/\n/g, '<br>')}</td></tr>`
    }
    htmlBody += '</table>'

    const response = await fetch('/api/send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: [recipientEmail],
        subject: 'Zájem o byt/dům',
        html: htmlBody,
        text: emailBody,
      }),
    })
    
    const result = await response.json()
    
    if (!result.success) {
      throw new Error(result.message || 'Chyba při odesílání')
    }
    
    return result
  } catch (error) {
    console.error('Error submitting interest form:', error)
    throw error
  }
}

export const submitTourRequest = async (data) => {
  try {
    const recipientEmail = 'info@domypecerady.cz'
    let emailBody = 'Žádost o prohlídku\n\n'
    emailBody += `Jméno: ${data.name || ''}\n`
    emailBody += `Email: ${data.email || ''}\n`
    if (data.phone) emailBody += `Telefon: ${data.phone}\n`
    if (data.apartment) emailBody += `Byt/Dům: ${data.apartment}\n`
    if (data.date) emailBody += `Datum: ${data.date}\n`
    if (data.time) emailBody += `Čas: ${data.time}\n`
    if (data.message) emailBody += `\nZpráva:\n${data.message}\n`

    let htmlBody = '<h2>Žádost o prohlídku</h2>'
    htmlBody += '<table style="border-collapse: collapse; width: 100%; max-width: 600px;">'
    htmlBody += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Jméno:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.name || ''}</td></tr>`
    htmlBody += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${data.email || ''}">${data.email || ''}</a></td></tr>`
    if (data.phone) {
      htmlBody += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Telefon:</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>`
    }
    if (data.apartment) {
      htmlBody += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Byt/Dům:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.apartment}</td></tr>`
    }
    if (data.date) {
      htmlBody += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Datum:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.date}</td></tr>`
    }
    if (data.time) {
      htmlBody += `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Čas:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.time}</td></tr>`
    }
    if (data.message) {
      htmlBody += `<tr><td colspan="2" style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Zpráva:</td></tr>`
      htmlBody += `<tr><td colspan="2" style="padding: 8px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${data.message.replace(/\n/g, '<br>')}</td></tr>`
    }
    htmlBody += '</table>'

    const response = await fetch('/api/send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: [recipientEmail],
        subject: 'Žádost o prohlídku',
        html: htmlBody,
        text: emailBody,
      }),
    })
    
    const result = await response.json()
    
    if (!result.success) {
      throw new Error(result.message || 'Chyba při odesílání')
    }
    
    return result
  } catch (error) {
    console.error('Error submitting tour request:', error)
    throw error
  }
}











