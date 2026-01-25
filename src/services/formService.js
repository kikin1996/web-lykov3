export const submitContactForm = async (data) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        subject: 'Nová zpráva z kontaktního formuláře',
      }),
    })
    
    const result = await response.json()
    
    if (!response.ok) {
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
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        subject: 'Zájem o byt/dům',
      }),
    })
    
    const result = await response.json()
    
    if (!response.ok) {
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
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        subject: 'Žádost o prohlídku',
      }),
    })
    
    const result = await response.json()
    
    if (!response.ok) {
      throw new Error(result.message || 'Chyba při odesílání')
    }
    
    return result
  } catch (error) {
    console.error('Error submitting tour request:', error)
    throw error
  }
}











