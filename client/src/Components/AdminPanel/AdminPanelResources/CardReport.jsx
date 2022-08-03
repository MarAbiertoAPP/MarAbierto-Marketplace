/*eslint-disable*/
import React from 'react'
import { Link } from 'react-router-dom'

export default function CardReport(props) {
  return (
    <div className='w-full h-96 rounded-2xl border border-neutral-700'>
        <h1 className='mt-2 text-center text-2xl text-neutral-300'>Type : {props.type.toUpperCase()}</h1>
        
        {props.type === 'user' && 
        <Link to={`/user/${props.target}`}>
          <h1 className='mt-2 text-center text-2xl text-neutral-300'>target : {props.target.toUpperCase()}</h1>
        </Link>
        }

       {props.type === 'nft' && 
        <Link to={`/details/${props.target}`}>
          <h1 className='mt-2 text-center text-2xl text-neutral-300'>target : {props.target.toUpperCase()}</h1>
        </Link>
        }

        {props.type === 'collection' && 
        <Link to={`/collection/${props.target}`}>
          <h1 className='mt-2 text-center text-2xl text-neutral-300'>target : {props.target.toUpperCase()}</h1>
        </Link>
        }
    
    </div>
  )
}
