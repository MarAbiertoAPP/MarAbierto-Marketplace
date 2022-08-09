import axios from 'axios'
import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import Nav from '../UI/Nav/Navigation'
const Review = () => {
  const reviewData = useSelector(state => state.review)
  useEffect(async () => {
    await axios.get('/review').then(res => console.log(res))
  }, [])

  return (
    <div >
        <Nav/>
        <div className='flex flex-row justify-around mt-5'>
        {reviewData.length > 0
          ? reviewData.map((r) => {
            return (<div className=' border-double border-2 border-sky-500 bg-indigo-600' key={r.id}> <h2 className='p-5 text-center  text-lime-300'>Review: {r.review}</h2>
        <h3 className='p-2 text-orange-300'> User id: {r.id}</h3>

            </div>)
          })
          : <h1 className='text-orange-300'>NO REVIEWS YET</h1>}
        </div>

    </div>
  )
}

export default Review
