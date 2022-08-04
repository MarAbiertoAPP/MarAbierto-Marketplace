import React from 'react'
import style from '../AdminPanel.module.css'

export default function AdminUsers () {
  const mockupData = {
    id: '42-42-42-42-42-42-42-42-42-42-42-42',
    name: 'gatingatito',
    img: 'data:image/jpeg;base64,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'
  }

  const simulated = [
    mockupData, mockupData, mockupData
  ]

  return (
    <div className='w-full flex flex-col items-center'>

      <div className={`w-full px-10 my-14 flex flex-col ${style.scrollBar} overflow-scroll overflow-x-hidden`}>

        <div className='w-full justify-center flex space-x-20'>

          <div className='w-5/12 border border-neutral-600 border-2 rounded-xl flex flex-col items-center p-4 space-y-4'>

            <h1 className='text-neutral-300 text-6xl'>xx999xx</h1>
            <h1 className='text-neutral-200 text-2xl'>Actual users</h1>

          </div>

          <div className='w-5/12 border border-neutral-600 border-2 rounded-xl flex flex-col items-center p-4 space-y-4'>

            <h1 className='text-neutral-300 text-6xl'>xx7xx</h1>
            <h1 className='text-neutral-200 text-2xl'>New users in the last 7 days</h1>

          </div>

        </div>

        <div className='w-full px-10 my-14 flex justify-center space-x-20'>

          <div className='w-5/12 border border-neutral-600 border-2 rounded-xl flex flex-col items-center p-4 space-y-4'>

           <h1 className='text-neutral-300 text-6xl'>xx222xx</h1>
            <h1 className='text-neutral-200 text-2xl'>Banned users</h1>

          </div>

        </div>

        <div className='w-full px-10 my-14 flex flex-col items-center space-y-8'>
          <h1 className='text-4xl text-neutral-300'>Ban an user</h1>
          <input className='bg-transparent border border-neutral-200 border-2 text-neutral-300 text-2xl w-full mx-20 rounded-lg px-4 py-2' placeholder='Name of the user'></input>

        </div>

        <div className='w-full my-8 space-y-4 flex flex-col'>
          {simulated?.map(e => {
            return <div key={e.id} className='w-full p-8 border border-t-transparent border-x-transparent border-neutral-300 flex items-center'>
              <img className='w-20 h-20 rounded-full' alt={'foto'} src={e.img}></img>

              <div className='flex flex-col items-center w-full'>
                <h1 className='text-2xl text-neutral-300'>{e.id}</h1>
                <h1 className='text-2xl text-neutral-300'>{e.name}</h1>
                <button className='bg-gray-700 hover:bg-red-700 mt-4 text-2xl rounded-lg px-4 py-2 text-neutral-300'>Ban User</button>
              </div>

            </div>
          })}
        </div>

      </div>
    </div>
  )
}
