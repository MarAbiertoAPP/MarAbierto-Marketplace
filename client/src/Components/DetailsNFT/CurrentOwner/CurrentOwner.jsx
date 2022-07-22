import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const CurrentOwner = (props) => {
  CurrentOwner.propTypes = {
    user: PropTypes.any
  }

  return (
    <div className='flex my-6'>
      <p className='text-md self-auto text-neutral-400 tracking-wider'>Owned by:</p>
      <Link className='ml-4' to={`/user/${props.user}`}>
        <p className='text-lg self-auto text-cyan-600 tracking-wider
        decoration-transparent underline hover:underline-offset-4 hover:decoration-current'> {props.user}</p>
      </Link>
    </div>
  )
}

export default CurrentOwner
