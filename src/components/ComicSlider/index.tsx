import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { Wrapper } from './styles'

export const ComicSlider = () => {
  return (
    <Wrapper>
      <Swiper
        slidesPerView={2.1}
        spaceBetween={12}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60"
            alt=""
          />

          <strong>X-Men Unlimited: Latitude #1</strong>

          <span>Shalvey</span>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60"
            alt=""
          />

          <strong>X-Men Unlimited: Latitude #1</strong>

          <span>Shalvey</span>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60"
            alt=""
          />

          <strong>X-Men Unlimited: Latitude #1</strong>

          <span>Shalvey</span>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60"
            alt=""
          />

          <strong>X-Men Unlimited: Latitude #1</strong>

          <span>Shalvey</span>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  )
}
