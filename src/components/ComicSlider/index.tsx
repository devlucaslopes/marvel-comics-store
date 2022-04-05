import { SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { ComicItem, Wrapper } from './styles'
import { useNavigate } from 'react-router-dom'
import { ComicData } from '../../contexts/types'

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

type ComicSliderProps = {
  comics: ComicData[]
}

export const ComicSlider = ({ comics }: ComicSliderProps) => {
  const navigate = useNavigate()

  const handleNavigation = (slug: string) => {
    navigate(slug)
  }

  return (
    <Wrapper>
      <Swiper {...swiperConfigs}>
        {comics.map(({ slug, isRare, title, creators, cover }) => (
          <SwiperSlide key={slug} onClick={() => handleNavigation(slug)}>
            <ComicItem isRare={isRare}>
              <img src={cover} alt={title} />
              <strong>{title}</strong>
              <span>{creators}</span>
            </ComicItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  )
}
