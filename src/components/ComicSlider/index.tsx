import { SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { ComicItem, Wrapper } from './styles'

const swiperConfigs: SwiperOptions = {
  slidesPerView: 2.1,
  spaceBetween: 12,
  preloadImages: false,
  lazy: true,
  breakpoints: {
    768: {
      width: 700
    }
  }
}

export const ComicSlider = () => {
  return (
    <Wrapper>
      <Swiper {...swiperConfigs}>
        <SwiperSlide>
          <ComicItem isRare>
            <img
              src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60"
              alt=""
            />

            <strong>X-Men Unlimited: Latitude #1</strong>

            <span>Shalvey</span>
          </ComicItem>
        </SwiperSlide>
        <SwiperSlide>
          <ComicItem>
            <img
              src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60"
              alt=""
            />

            <strong>X-Men Unlimited: Latitude #1</strong>

            <span>Shalvey</span>
          </ComicItem>
        </SwiperSlide>

        <SwiperSlide>
          <ComicItem isRare>
            <img
              src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60"
              alt=""
            />

            <strong>X-Men Unlimited: Latitude #1</strong>

            <span>Shalvey</span>
          </ComicItem>
        </SwiperSlide>

        <SwiperSlide>
          <ComicItem>
            <img
              src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60"
              alt=""
            />

            <strong>X-Men Unlimited: Latitude #1</strong>

            <span>Shalvey</span>
          </ComicItem>
        </SwiperSlide>

        <SwiperSlide>
          <ComicItem>
            <img
              src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60"
              alt=""
            />

            <strong>X-Men Unlimited: Latitude #1</strong>

            <span>Shalvey</span>
          </ComicItem>
        </SwiperSlide>

        <SwiperSlide>
          <ComicItem>
            <img
              src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60"
              alt=""
            />

            <strong>X-Men Unlimited: Latitude #1</strong>

            <span>Shalvey</span>
          </ComicItem>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  )
}
