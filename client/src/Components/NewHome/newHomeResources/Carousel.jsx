/*eslint-disable */
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CardCarousel from './CardCarousel';
import { useNavigate } from 'react-router-dom';

export default function Carousel (props) {
  
  const navigate = useNavigate()
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay ]}
    spaceBetween={50}
    slidesPerView={3}
    loop={true}
    autoplay={true}
    delay={500}
    /* onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')} */
  >
    {/* <SwiperSlide>
      <div className='flex flex-col justify-center'>
        <CardCarousel img ={props.data.frontPage} />
        <div className='text-center'>
          <h1 className='text-xl text-neutral-300'>{props.data.name}</h1>
          {text.split('').length > 5 ?  <h1 className='text-xl text-neutral-300'>{text.split('').slice(0,30).join('') + "..."}</h1> : <h1 className='text-xl text-neutral-300'>{text}</h1>}
        </div>
      </div>
    </SwiperSlide> */}

    {props.data?.map((e, index) => {

      return <SwiperSlide key={index} onClick={() => navigate(`/collection/${e.name}`)}>
      <div className='flex flex-col justify-center'>
        <CardCarousel img ={e.frontPage} />
        <div className='text-center'>
          <h1 className=' text-lime-400 uppercase text-xl text-neutral-300'>{e.name}</h1>
         {/*  {text.split('').length > 5 ?  <h1 className='text-xl text-neutral-300'>{text.split('').slice(0,30).join('') + "..."}</h1> : <h1 className='text-xl text-neutral-300'>{text}</h1>} */}
        </div>
      </div>
    </SwiperSlide>
    })}

   
    
  </Swiper>
  )
}
