/*eslint-disable */
import React from 'react'

export default function CardExploreCollections (props) {
  return (
    <div className='basis-96 h-72 m-2 shadow-2xl shadow-rafagod mx-4 my-8 rounded-xl'>
      <img className='w-full rounded-t-xl h-3/4 object-cover' src={props.img}></img>

      <div className='h-1/4 rounded-b-xl flex items-center bg-neutral-800'>
        <img className='ml-6 -mt-12 h-16 w-16 rounded-full shadow-md shadow-white ' src={props.mini}></img>
        <h1 className='ml-4 text-lg text-neutral-300'>{props.name}</h1>
      </div>

    </div>
  )
}
