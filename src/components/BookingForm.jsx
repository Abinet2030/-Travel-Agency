import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function BookingForm() {
  const [start, setStart] = useState(null)
  const [travelers, setTravelers] = useState(2)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!start || !name || !email) return alert('Please fill all required fields')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="card" style={{padding: 20, borderColor: '#86efac', background: '#ecfdf5', color: '#065f46'}}>
        <h3 className="text-lg fw-bold">Booking Confirmed!</h3>
        <p className="text-sm" style={{marginTop: 6}}>We sent a confirmation to {email}. Our team will contact you shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} style={{display:'grid', gap:16, maxWidth: 560}}>
      <div className="field">
        <label className="label">Full Name</label>
        <input className="input" value={name} onChange={(e)=>setName(e.target.value)} required />
      </div>
      <div className="field">
        <label className="label">Email</label>
        <input type="email" className="input" value={email} onChange={(e)=>setEmail(e.target.value)} required />
      </div>
      <div style={{display:'grid', gap:16, gridTemplateColumns:'1fr',}}
      >
        <div className="field">
          <label className="label">Travel Date</label>
          <DatePicker selected={start} onChange={setStart} className="input" placeholderText="Select date" required />
        </div>
        <div className="field">
          <label className="label">Travelers</label>
          <input type="number" min={1} className="input" value={travelers} onChange={(e)=>setTravelers(e.target.value)} />
        </div>
      </div>
      <button className="btn btn-primary" style={{marginTop:8}}>Submit Booking</button>
    </form>
  )
}
