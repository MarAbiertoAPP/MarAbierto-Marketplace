/*eslint-disable */
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CardCarousel from './CardCarousel';

export default function Carousel () {
  const text = 'aaaaa bbbbb cccccc ddddd eeeee ffff ggggg hhh iii jj'
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    loop={true}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide>
      <div className='flex flex-col justify-center'>
        <CardCarousel />
        <div className='text-center'>
          <h1 className='text-xl text-neutral-300'>To be Free (Boundles)</h1>
          {text.split('').length > 5 ?  <h1 className='text-xl text-neutral-300'>{text.split('').slice(0,30).join('') + "..."}</h1> : <h1 className='text-xl text-neutral-300'>{text}</h1>}
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className='flex flex-col justify-center'>
        <CardCarousel />
        <div className='text-center'>
          <h1 className='text-xl text-neutral-300'>To be Free (Boundles)</h1>
          {text.split('').length > 5 ?  <h1 className='text-xl text-neutral-300'>{text.split('').slice(0,30).join('') + "..."}</h1> : <h1 className='text-xl text-neutral-300'>{text}</h1>}
        </div>
      </div>
    </SwiperSlide>
    
    <SwiperSlide>
      <div className='flex flex-col justify-center'>
        <CardCarousel />
        <div className='text-center'>
          <h1 className='text-xl text-neutral-300'>To be Free (Boundles)</h1>
          {text.split('').length > 5 ?  <h1 className='text-xl text-neutral-300'>{text.split('').slice(0,30).join('') + "..."}</h1> : <h1 className='text-xl text-neutral-300'>{text}</h1>}
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className='flex flex-col justify-center'>
        <CardCarousel />
        <div className='text-center'>
          <h1 className='text-xl text-neutral-300'>To be Free (Boundles)</h1>
          {text.split('').length > 5 ?  <h1 className='text-xl text-neutral-300'>{text.split('').slice(0,30).join('') + "..."}</h1> : <h1 className='text-xl text-neutral-300'>{text}</h1>}
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className='flex flex-col justify-center'>
        <CardCarousel />
        <div className='text-center'>
          <h1 className='text-xl text-neutral-300'>To be Free (Boundles)</h1>
          {text.split('').length > 5 ?  <h1 className='text-xl text-neutral-300'>{text.split('').slice(0,30).join('') + "..."}</h1> : <h1 className='text-xl text-neutral-300'>{text}</h1>}
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className='flex flex-col justify-center'>
        <CardCarousel />
        <div className='text-center'>
          <h1 className='text-xl text-neutral-300'>To be Free (Boundles)</h1>
          {text.split('').length > 5 ?  <h1 className='text-xl text-neutral-300'>{text.split('').slice(0,30).join('') + "..."}</h1> : <h1 className='text-xl text-neutral-300'>{text}</h1>}
        </div>
      </div>
    </SwiperSlide>
    
  </Swiper>
  )
}
