import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Banned () {
  const { logout } = useAuth0()
  const handleClick = () => {
    logout()
  }
  return (
    <div className='text-white grid justify-center items-center h-screen'>
      <div className='text-xl font-xl'>
        <h1>You are banned!</h1>
        <p>You have been banned from this site. If you believe this is an error, please contact the site administrator.</p>
      </div>
      <div className='flex items-center justify-center '>
      <button onClick={(e) => handleClick(e)} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-xl text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Git Checkout
        </span>
      </button>
      </div>
    </div>
  )
}
