import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../UI/Nav/Navigation'

const ThanksForBuying = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => navigate('/'), 3000)
  })
  return (
    <div>
      <Nav/>
      <h1 className='text-white flex justify-center align-center mt-100px font-bold ' >Thanks For Your Purchase</h1>
      <img className='w-screen min-h-max' src="https://ph-files.imgix.net/2ac07265-a2a0-43be-9823-5173df424d0c.png?auto=format&fit=crop&frame=1&h=512&w=1024" alt="" />
      </div>
  )
}

export default ThanksForBuying
