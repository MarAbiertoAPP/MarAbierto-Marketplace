/*eslint-disable */
import React from 'react'
import photo from '../../../assests/newHomePhoto.jpg'
export default function CardCarousel (props) {
  return (
    <div className='rounded-lg'>
      <img className='shadow-2xl shadow-purple-700 object-contain w-cardCarousel h-cardCarousel' src={photo}></img>
    </div>
  )
}
