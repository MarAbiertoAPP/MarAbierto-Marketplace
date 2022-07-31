import React from 'react'
import PropTypes from 'prop-types'

const DetailsDescription = (props) => {
  DetailsDescription.propTypes = {
    description: PropTypes.any,
    collection: PropTypes.any
  }

  return (
     <div className='w-full px-4 md:px-14 xl:px-8 py-6 '>
        <p className='text-md self-auto text-white tracking-wider'>{`About ${props.collection ? props.collection : ''}`}</p>
        <p className='text-md self-auto text-neutral-400 tracking-wider'>{props.description}</p>
    </div>
  )
}

export default DetailsDescription
