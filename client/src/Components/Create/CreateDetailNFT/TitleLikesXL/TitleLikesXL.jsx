import React from 'react'
import PropTypes from 'prop-types'
import { FaHeart } from 'react-icons/fa'

const TitleLikesXL = (props) => {
  TitleLikesXL.propTypes = {
    title: PropTypes.any
  }

  return (
    <div className='hidden xl:flex w-full'>
        <h1 className='mt-6 text-3xl tracking-wider text-purple-700 mx-8 '>{props.title}</h1>
        <div className='flex items-center mt-6 place-content-end ml-64'>
          <FaHeart className='text-neutral-400 text-3xl hover:text-red-500'/>
          <p className='ml-4 text-md self-auto text-neutral-400 tracking-wider'>444 likes</p>
        </div>
    </div>
  )
}

export default TitleLikesXL
