export const submitContactForm = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate API call
      console.log('Contact form submitted:', data)
      resolve({ success: true, message: 'Formulář byl úspěšně odeslán' })
    }, 500)
  })
}

export const submitInterestForm = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate API call
      console.log('Interest form submitted:', data)
      resolve({ success: true, message: 'Děkujeme! Brzy vás kontaktujeme.' })
    }, 500)
  })
}

export const submitTourRequest = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate API call
      console.log('Tour request submitted:', data)
      resolve({ success: true, message: 'Žádost o prohlídku byla odeslána' })
    }, 500)
  })
}








