import { useState } from 'react'
import { useApp } from '../../context/AppContext'
import { submitInterestForm } from '../../services/formService'
import Input from '../shared/Input'
import TextArea from '../shared/TextArea'
import Button from '../shared/Button'

const InterestForm = ({ apartment, onClose }) => {
  const { showToast } = useApp()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: apartment ? `Mám zájem o byt ${apartment.apartmentNumber}` : '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

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
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    try {
      await submitInterestForm({
        ...formData,
        apartment: apartment?.apartmentNumber || '',
      })
      showToast('Děkujeme! Brzy vás kontaktujeme.', 'success')
      onClose()
    } catch (error) {
      showToast('Chyba při odesílání, zkuste to prosím znovu', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
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
      <TextArea
        label="Zpráva"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={4}
      />
      <div className="flex gap-4 mt-6">
        <Button type="submit" disabled={loading}>
          {loading ? 'Odesílání...' : 'Odeslat'}
        </Button>
        <Button type="button" variant="ghost" onClick={onClose}>
          Zrušit
        </Button>
      </div>
    </form>
  )
}

export default InterestForm








