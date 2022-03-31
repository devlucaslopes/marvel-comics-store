import { SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { ComicItem, Wrapper } from './styles'
import { useNavigate } from 'react-router-dom'

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

const DATA = [
  {
    id: 1,
    title: 'The Amazing Spider',
    slug: 'the-amazing-spider',
    image:
      'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60',
    author: 'Shalvey',
    isRare: true
  },
  {
    id: 2,
    title: 'The Amazing Spider',
    slug: 'the-amazing-spider-2',
    image:
      'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60',
    author: 'Shalvey',
    isRare: false
  }
]

export const ComicSlider = () => {
  const navigate = useNavigate()

  const handleNavigation = (slug: string) => {
    navigate(slug)
  }

  return (
    <Wrapper>
      <Swiper {...swiperConfigs}>
        {DATA.map(({ slug, isRare, title, author, image }) => (
          <SwiperSlide key={slug} onClick={() => handleNavigation(slug)}>
            <ComicItem isRare={isRare}>
              <img src={image} alt={title} />
              <strong>{title}</strong>
              <span>{author}</span>
            </ComicItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  )
}
