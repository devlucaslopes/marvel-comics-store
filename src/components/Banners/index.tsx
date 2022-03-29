import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'

import { Container } from '../Container'
import { Button } from '../Button'

import { Subtitle, Title, Wrapper, ButtonWrapper } from './styles'

export const Banners = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}">${index}</span>`
    }
  }

  return (
    <Wrapper>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60"
            alt=""
          />

          <Container>
            <div>
              <Subtitle>INFINITY COMICS</Subtitle>
              <Title>READ THE FIRST ISSUE OF &quot;ALLIGATOR LOKI&quot;</Title>
              <ButtonWrapper>
                <Button>Ler mais</Button>
              </ButtonWrapper>
            </div>
          </Container>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1588497859490-85d1c17db96d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60"
            alt=""
          />

          <Container>
            <Subtitle>INFINITY COMICS</Subtitle>
            <Title>READ THE FIRST ISSUE OF &quot;ALLIGATOR LOKI&quot;</Title>
          </Container>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  )
}
