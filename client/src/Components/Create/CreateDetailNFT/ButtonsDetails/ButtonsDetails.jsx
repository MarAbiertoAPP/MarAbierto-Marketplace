import React from 'react'

const ButtonsDetails = (props) => {
  return (
    <div className='flex flex-col md:flex-row space-around mt-20 space-y-4 md:space-y-0'>
        <button className='basis-4/12 bg-purple-700 hover:bg-purple-900 rounded-2xl mx-8 text-2xl text-neutral-300 py-4'>Buy Now</button>
        <button className='basis-4/12 bg-purple-700 hover:bg-purple-900 rounded-2xl mx-8 text-2xl text-neutral-300 py-4'>Make offer</button>
        <button className='basis-4/12 bg-purple-700 hover:bg-purple-900 rounded-2xl mx-8 text-2xl text-neutral-300 py-4'>Add to cart</button>
    </div>
  )
}

export default ButtonsDetails
