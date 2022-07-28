/*eslint-disable*/
import React from 'react'
import Nav from '../UI/Nav/Navigation'
import style from './newHome.module.css'

import photo from '../../assests/newHomePhoto.jpg'
import mini from '../../assests/demo/fotouser.jpeg'
import photo2 from '../../assests/demo/background.webp'

export default function NewHome () {
  return (
    <div className={style.div}>
      <Nav/>

      <div className={'mt-12 w-full max-w-screen-xl flex xl:max-h-limitHnewHome'}>

        <div className='basis-6/12 space-y-8 p-6 flex flex-col justify-center'>
          <h1 className='text-neutral-300 text-5xl'>Discover, collect, and sell extraordinary NFTs</h1>
          <p className='text-2xl text-neutral-500'>OpenSea is the world&apos;s first and largest NFT marketplace</p>

          <div className='flex w-full space-x-20'>
            <button className='text-white text-3xl p-4 px-6 my-6 bg-purple-700 hover:bg-purple-900 rounded-lg'>Explore</button>
            <button className='text-white text-3xl p-4 px-6 my-6 bg-purple-700 hover:bg-purple-900 rounded-lg'>Create</button>
          </div>
          
          <div>
            <h1 className='-mt-30 text-white'>Learn more about MarAbierto</h1>
          </div>

        </div>

        <div className='basis-1/12'>

        </div>

        <div className='basis-5/12 flex flex-col items-center p-8'>

          <div className='bg-purple-900 rounded-lg'>
            <img className='max-h-limitH max-w-xl m-4 rounded-md' src={photo}></img>
            <div className='flex items-center m-4'>
              <img className='rounded-full h-10 w-10' src={mini}></img>
              <h1 className='text-white text-xl ml-2'>NOMBRE DE LA COLECCION</h1>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
