/*eslint-disable */
import React from 'react'

export default function CardCarousel (props) {
  return (
    <div className='rounded-lg'>
      <img className='shadow-2xl shadow-purple-700 hover:shadow-white object-cover w-cardCarousel h-cardCarousel' src={props.img}></img>
    </div>
  )
}
