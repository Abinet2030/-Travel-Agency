import { useEffect, useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '../config'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ sending: false, ok: null, msg: '' })
  const [progress, setProgress] = useState(0)
  const revealRef = useRef(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const scrollTop = el.scrollTop
      const max = el.scrollHeight - el.clientHeight
      const pct = max > 0 ? (scrollTop / max) * 100 : 0
      setProgress(pct)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Reveal-on-scroll
  useEffect(() => {
    const root = revealRef.current
    if (!root) return
    const items = root.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('reveal-visible')
        }
      })
    }, { threshold: 0.12 })
    items.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ sending: false, ok: false, msg: 'Please fill in the required fields.' })
      return
    }
    try {
      setStatus({ sending: true, ok: null, msg: '' })
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject || 'Website Contact',
        message: form.message,
      }
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      setStatus({ sending: false, ok: true, msg: 'Thanks! Your message has been sent.' })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus({ sending: false, ok: false, msg: 'Failed to send. Please try again later.' })
      // Optionally log: console.error(err)
    }
  }

  return (
    <section className="section" ref={revealRef}>
      {/* Scroll progress bar */}
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
      <div className="container">
        <h1 className="text-3xl">Contact</h1>
        <p className="mt-2 muted reveal">We’d love to hear from you. Send us a message and we’ll reply shortly.</p>

        <form className="form mt-12 reveal" onSubmit={onSubmit} noValidate>
          <div className="form-row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" className="input" placeholder="Your full name" value={form.name} onChange={onChange} required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" className="input" placeholder="you@example.com" value={form.email} onChange={onChange} required />
            </div>
          </div>
          <div className="field">
            <label htmlFor="subject">Subject <span className="muted">(optional)</span></label>
            <input id="subject" name="subject" type="text" className="input" placeholder="How can we help?" value={form.subject} onChange={onChange} />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" className="textarea" placeholder="Write your message here..." value={form.message} onChange={onChange} required />
          </div>
          <div style={{display:'flex', alignItems:'center', gap:12}}>
            <button className="btn btn-primary" type="submit" disabled={status.sending}>{status.sending ? 'Sending…' : 'Send Message'}</button>
            {status.msg && (
              <span className="text-sm" style={{color: status.ok ? 'green' : 'crimson'}}>{status.msg}</span>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
