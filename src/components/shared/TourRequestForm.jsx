import { useState } from 'react'
import { useApp } from '../../context/AppContext'
import { submitTourRequest } from '../../services/formService'
import Input from './Input'
import Select from './Select'
import TextArea from './TextArea'
import Button from './Button'

const TourRequestForm = ({ apartment, onClose }) => {
  const { showToast } = useApp()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const timeOptions = [
    { value: '', label: 'Vyberte čas' },
    { value: '09:00', label: '9:00' },
    { value: '10:00', label: '10:00' },
    { value: '11:00', label: '11:00' },
    { value: '14:00', label: '14:00' },
    { value: '15:00', label: '15:00' },
    { value: '16:00', label: '16:00' },
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
    if (!formData.date) newErrors.date = 'Datum je povinné'
    if (!formData.time) newErrors.time = 'Čas je povinný'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    try {
      await submitTourRequest({
        ...formData,
        apartment: apartment?.apartmentNumber || '',
      })
      showToast('Žádost o prohlídku byla odeslána', 'success')
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
      <Input
        label="Preferovaný datum"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        error={errors.date}
        required
        min={new Date().toISOString().split('T')[0]}
      />
      <Select
        label="Preferovaný čas"
        name="time"
        value={formData.time}
        onChange={handleChange}
        options={timeOptions}
        error={errors.time}
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
          {loading ? 'Odesílání...' : 'Odeslat žádost'}
        </Button>
        <Button type="button" variant="ghost" onClick={onClose}>
          Zrušit
        </Button>
      </div>
    </form>
  )
}

export default TourRequestForm






