import { useEffect } from 'react'

export default function Lightbox({ src, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose?.() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!src) return null
  return (
    <div className="lightbox" onClick={onClose}>
      <img src={src} alt="full" onClick={(e)=>e.stopPropagation()} />
    </div>
  )
}
