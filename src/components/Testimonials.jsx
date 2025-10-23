import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function Testimonials({ data = [] }) {
  return (
    <div className="mt-12">
      <h2 className="text-xl">What travelers say</h2>
      <Swiper spaceBetween={16} slidesPerView={1} breakpoints={{640:{slidesPerView:2},1024:{slidesPerView:3}}}>
        {data.map((t) => (
          <SwiperSlide key={t.id}>
            <blockquote className="card" style={{padding:20}}>
              <p className="text-sm">“{t.text}”</p>
              <footer className="text-sm muted" style={{marginTop:10}}>— {t.name} • {'★'.repeat(t.rating)}</footer>
            </blockquote>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
