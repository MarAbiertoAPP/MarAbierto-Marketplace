import React, { useState, useEffect } from 'react'
import style from '../AdminPanel.module.css'
import axios from 'axios'
export default function AdminCollections () {
  const [collectionQuantity, setcollectionQuantity] = useState()

  useEffect((collectionQuan) => {
    countCollection()
    setcollectionQuantity(collectionQuan)
  }, [])

  async function countCollection () {
    let collectionQuan = 0
    await axios.get('https://marabierto.herokuapp.com/collection/all')
      .then((response) => {
        collectionQuan = response?.data.totalCollections
      })
      .catch(function (error) {
        console.log(error)
      })
    setcollectionQuantity(collectionQuan)
    console.log('aqui la cant de coleccion', collectionQuan)
  }

  return (
    <div className='w-full flex flex-col items-center justify-center'>

      <div className={`w-full px-10 my-14 flex flex-col ${style.scrollBar} overflow-scroll overflow-x-hidden`}>

        <div className='w-full justify-center flex space-x-20'>

          <div className='w-5/12 border border-neutral-600 border-2 rounded-xl flex flex-col items-center p-4 space-y-4'>

            <h1 className='text-neutral-300 text-6xl'>{collectionQuantity}</h1>
            <h1 className='text-neutral-200 text-2xl'>Actual Collections</h1>

          </div>

          {/* <div className='w-5/12 border border-neutral-600 border-2 rounded-xl flex flex-col items-center p-4 space-y-4'>

            <h1 className='text-neutral-300 text-6xl'>xx7xx</h1>
            <h1 className='text-neutral-200 text-2xl'>New Collections in the last 7 days</h1>

          </div> */}

        </div>

        {/* <div className='w-full px-10 my-14 flex justify-center space-x-20'>

          <div className='w-5/12 border border-neutral-600 border-2 rounded-xl flex flex-col items-center p-4 space-y-4'>

           <h1 className='text-neutral-300 text-6xl'>xx222xx</h1>
            <h1 className='text-neutral-200 text-2xl'>Banned Collections</h1>

          </div>

        </div> */}

        {/* <div className='w-full px-10 my-14 flex flex-col items-center space-y-8'>
          <h1 className='text-4xl text-neutral-300'>Ban a Collection</h1>
          <input className='bg-transparent border border-neutral-200 border-2 text-neutral-300 text-2xl w-full mx-20 rounded-lg px-4 py-2' placeholder='Name of the user'></input>

        </div> */}

        {/* <div className='w-full my-8 space-y-4 flex flex-col'>

        </div> */}

      </div>
    </div>
  )
}
