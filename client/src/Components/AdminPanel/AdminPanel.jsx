/*eslint-disable*/
import React, { useState } from 'react'
import style from './AdminPanel.module.css'
import AdminCollections from './AdminPanelResources/AdminCollections'
import AdminDashboard from './AdminPanelResources/AdminDashboard'
import AdminNfts from './AdminPanelResources/AdminNfts'
import AdminReports from './AdminPanelResources/AdminReports'
import AdminUsers from './AdminPanelResources/AdminUsers'

export default function AdminPanel () {
  const [rendering, setRendering] = useState('Dashboard')

  function handleRendering1 (e) {
    e.preventDefault()
    setRendering('Dashboard')
  }

  function handleRendering2 (e) {
    e.preventDefault()
    setRendering('Reports')
  }

  function handleRendering3 (e) {
    e.preventDefault()
    setRendering('Users')
  }

  function handleRendering4 (e) {
    e.preventDefault()
    setRendering('Collections')
  }

  function handleRendering5 (e) {
    e.preventDefault()
    setRendering('NFTs')
  }
  

  return (
    <div className={style.div}>
        <div className=' w-full max-w-screen-xl  flex h-screen max-h-limitHnewHome'>
          <div className='basis-3/12 min-h-full shadow-2xl shadow-purple-700 flex flex-col items-center'>

            <div className='p-8 text-center border border-xl border-t-transparent border-x-transparent border-neutral-300'>
              <h1 className='text-4xl text-neutral-300'>Admin Panel</h1>
            </div>

            <div className='flex flex-col w-full my-14 space-y-10'>

                <button onClick={handleRendering1} value='Dashboard' className='p-4 mx-4 text-center rounded-2xl border-xl bg-purple-900  border-neutral-300 hover:bg-purple-700'>
                  <h1 className='text-2xl text-neutral-300'>Dashboard</h1>
                </button>

                <button onClick={handleRendering2}  value={'Reports'} className='p-4 mx-4 text-center rounded-2xl border-xl bg-purple-900  border-neutral-300 hover:bg-purple-700'>
                  <h1 className='text-2xl text-neutral-300'>Reports</h1>
                </button>

                <button onClick={handleRendering3}  value='Users' className='p-4 mx-4 text-center rounded-2xl border-xl bg-purple-900  border-neutral-300 hover:bg-purple-700'>
                  <h1 className='text-2xl text-neutral-300'>Users</h1>
                </button>

                <button onClick={handleRendering4}  value='Collections' className='p-4 mx-4 text-center rounded-2xl border-xl bg-purple-900  border-neutral-300 hover:bg-purple-700'>
                  <h1 className={`text-2xl text-neutral-300`}>Collections</h1>
                </button>

                <button onClick={handleRendering5}  value='NFTs' className='p-4 mx-4 text-center rounded-2xl border-xl bg-purple-900  border-neutral-300 hover:bg-purple-700'>
                  <h1 className='text-2xl text-neutral-300'>NFTs</h1>
                </button>

            </div>

          </div>

          <div className='border border-xl border-neutral-700 basis-9/12 flex justify-center'>
            {rendering === 'Dashboard' && <AdminDashboard/>}
            {rendering === 'Reports' && <AdminReports/>}
            {rendering === 'Users' && <AdminUsers/>}
            {rendering === 'Collections' && <AdminCollections/>}
            {rendering === 'NFTs' && <AdminNfts/>}
          </div>

        </div>
    </div>
  )
}
