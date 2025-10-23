import { useState } from 'react'
import Lightbox from './Lightbox'

export default function GalleryMasonry({ images = [] }) {
  const [active, setActive] = useState(null)
  return (
    <>
      <div className="masonry">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`g-${i}`} style={{width:'100%', borderRadius:12, cursor:'zoom-in', marginBottom:16, transition:'opacity var(--fast)'}} onClick={()=>setActive(src)} onMouseOver={e=>e.currentTarget.style.opacity='0.9'} onMouseOut={e=>e.currentTarget.style.opacity='1'} />
        ))}
      </div>
      <Lightbox src={active} onClose={()=>setActive(null)} />
    </>
  )
}
