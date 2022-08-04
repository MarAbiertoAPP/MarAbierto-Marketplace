import React from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
const TitleDetails = ({ title }) => {
  TitleDetails.propTypes = {
    title: PropTypes.string
  }
  return (
        <div className='text-center'>
          <h1 className='my-6 text-3xl md:text-6xl tracking-wider text-purple-700 mx-8 capitalize'>{title}</h1>

          {/* <div className='flex justify-center items-center -my-10'>
            <Link to='/'>
              <p className='text-md md:text-xl self-auto text-neutral-400 tracking-wider'>Landing</p>
            </Link>

            <p className='m-8 md:m-10 text-md md:text-xl self-auto text-neutral-400 tracking-wider'>/</p>

            <Link to='/home'>
              <p className='text-md md:text-xl self-auto text-neutral-400 tracking-wider'>Home</p>
            </Link>

            <p className='m-8 md:m-10 text-md md:text-xl self-auto text-neutral-400 tracking-wider'>/</p>

            <Link to='/'>
              <p className='text-md md:text-xl self-auto text-neutral-400 tracking-wider'>Collection</p>
            </Link>

          </div> */}
        </div>
  )
}

export default TitleDetails
