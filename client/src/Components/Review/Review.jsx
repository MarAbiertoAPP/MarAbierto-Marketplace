import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Nav from '../UI/Nav/Navigation'
const Review = () => {
  const [userReview, setuserReview] = useState()

  useEffect(() => {
    axios.get('/review').then(res => setuserReview(res.data))
  }, [])

  return (
    <div >
        <div className='flex justify-center'>
      <Nav />
      </div>
        <div className='flex flex-row justify-around mt-10'>
        {userReview
          ? userReview.map((r, index) => {
            return (<div className=' border-double border-2 border-sky-500 bg-indigo-600' key={index}> <h2 className='p-5 text-center  text-lime-300'>Review: {r.description}</h2>
        <h3 className='p-2 text-orange-300'> User id: {r.id}</h3>

            </div>)
          })
          : <h1 className='text-orange-300'>NO REVIEWS YET</h1>}
        </div>

    </div>
  )
}

export default Review
