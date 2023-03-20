import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Nav from '../UI/Nav/Navigation'
const Review = () => {
  const [userReview, setuserReview] = useState()

  useEffect(() => {
    axios.get('/review').then(res => setuserReview(res.data))
  }, [])

  return (
    <div className='h-screen' >
      <div className='flex justify-center'>
        <Nav />
      </div>
      <div className='flex flex-row justify-around mt-10'>
        {userReview?.length > 0
          ? userReview.map((r, index) => {
            return (<div className=' border-double border-2 rounded-md border-sky-500 xl:w-1/4 ' key={index}> <h2 className='p-5 text-center text-xl text-lime-300'>Review</h2>
              <h3 className='p-2 text-orange-300'>User id: {r.id.length > 10 ? r.id : 'Guest'}</h3>
              <h3 className='p-2 text-lime-300'>Says:</h3>
              <h2 className='text-center text-2xl capitalize text-lime-600' key={index}>{r.description}</h2>

            </div>)
          })
          : <h1 className='text-orange-300'>NO REVIEWS YET</h1>}
      </div>

    </div>
  )
}

export default Review
