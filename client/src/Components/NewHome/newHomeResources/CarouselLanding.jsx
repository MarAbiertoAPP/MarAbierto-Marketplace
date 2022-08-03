/*eslint-disable */
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import React from 'react'

export default function CarouselLanding (props) {
  return (
    <Swiper className=''
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    watchOverflow={false}
    slidesPerView={1}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    {props.data?.map(e =>{
        return <SwiperSlide>
            <img className='w-cardCarousel h-96' src={e.url}></img>
            <h1 className='text-white'>{e.caption}</h1>
        </SwiperSlide>
    })}

  </Swiper>
  )
}
