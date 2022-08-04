/*eslint-disable*/
import React from 'react'
import { Link } from 'react-router-dom'

export default function CardReport(props) {
  return (
    <div className='w-full h-96 rounded-2xl border border-neutral-700 relative'>
        <h1 className='mt-2 text-center text-2xl text-neutral-300'>Type : {props.type.toUpperCase()}</h1>
        
        {props.type === 'user' && 
        <Link to={`/user/${props.target}`}>
          <h1 className='mt-2 text-center text-2xl text-neutral-300'>Target : {props.target.toUpperCase()}</h1>
        </Link>
        }

       {props.type === 'nft' && 
        <Link to={`/details/${props.target}`}>
          <h1 className='mt-2 text-center text-2xl text-neutral-300'>Target : {props.target.toUpperCase()}</h1>
        </Link>
        }

        {props.type === 'collection' && 
        <Link to={`/collection/${props.target}`}>
          <h1 className='mt-2 text-center text-2xl text-neutral-300'>Target : {props.target.toUpperCase()}</h1>
        </Link>
        }

        <h1 className='mt-6 text-center text-xl text-neutral-300'>{props.description}</h1>

        <div className='w-full flex justify-center space-x-20 absolute bottom-14 '>
          <button className='p-4 mx-4 text-center rounded-2xl border-xl bg-gray-700  border-neutral-300 hover:bg-green-700'>
            <h1 className='text-lg text-neutral-300'>Mark as resolved</h1>
          </button>

          <button className='p-4 mx-4 text-center rounded-2xl border-xl bg-gray-700  border-neutral-300 hover:bg-red-700'>
            <h1 className='text-lg text-neutral-300'>Reject report</h1>
          </button>
    
        </div>
    </div>
  )
}
