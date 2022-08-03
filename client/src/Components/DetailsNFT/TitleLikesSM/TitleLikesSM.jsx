import React from 'react'
import PropTypes from 'prop-types'
import { FaHeart } from 'react-icons/fa'

const TitleLikesSM = ({ title }) => {
  TitleLikesSM.propTypes = {
    title: PropTypes.any
  }

  return (
        <div className='flex xl:hidden w-full justify-center space-x-20 '>
            <h1 className='mt-6 text-xl md:text-3xl tracking-wider text-purple-700 ml-4 capitalize'>{title}</h1>
            <div className='flex items-center mt-6 place-content-end'>
                <FaHeart className='text-neutral-400 text-3xl hover:text-red-500'/>
                <p className='ml-4 text-md self-auto text-neutral-400 tracking-wider'>444 likes</p>
            </div>
        </div>
  )
}

export default TitleLikesSM
