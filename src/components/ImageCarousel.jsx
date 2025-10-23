import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function ImageCarousel({ images = [] }) {
  return (
    <Swiper spaceBetween={12} slidesPerView={1} breakpoints={{640:{slidesPerView:2},1024:{slidesPerView:3}}}>
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <img src={src} alt={`slide-${i}`} style={{borderRadius:12, height:192, width:'100%', objectFit:'cover'}} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
