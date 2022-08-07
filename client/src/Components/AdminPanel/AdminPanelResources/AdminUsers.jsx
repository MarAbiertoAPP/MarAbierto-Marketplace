import React, { useEffect, useState } from 'react'
import style from '../AdminPanel.module.css'
import axios from 'axios'
import { AiOutlineSearch } from 'react-icons/ai'

export default function AdminUsers () {
  // const simulated = [
  //   mockupData, mockupData, mockupData
  // ]
  const [dataFromUserForTheCard, setdataFromUserForTheCard] = useState('')
  const [howManyUsersExist, setHowmanyUsersExist] = useState('?')
  const [input, setInput] = useState('')

  async function banUser (e) {
    e.preventDefault()
    const body = { name: dataFromUserForTheCard.nickname, id: dataFromUserForTheCard.id }

    await axios.post('https://marabierto.herokuapp.com/users/banuser', body)
      .then(function (response) {
        alert('activity were added succesfully')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  function handleInputChanges (e) {
    e.preventDefault()
    setInput(e.target.value)
  }

  function PreventDefault (e) {
    e.preventDefault()
    getdataFromUserForTheCard(input)
  }

  async function getdataFromUserForTheCard (nickname) {
    const response = await axios.get(`https://marabierto.herokuapp.com/users/getuserdatabyname/${nickname}`).then(r => r.data)
    setdataFromUserForTheCard(response)
  }

  useEffect(() => {
    async function getHowManyUsersExist () {
      const response = await axios.get('https://marabierto.herokuapp.com/users/amount').then(r => r.data)
      setHowmanyUsersExist(response)
    }

    getHowManyUsersExist()
  })

  return (
    <div className='w-full flex flex-col items-center'>

      <div className={`w-full px-10 my-14 flex flex-col ${style.scrollBar} overflow-scroll overflow-x-hidden`}>

        <div className='w-full justify-center flex space-x-20'>

          <div className='w-5/12 border border-neutral-600 border-2 rounded-xl flex flex-col items-center p-4 space-y-4'>

            <h1 className='text-neutral-300 text-6xl'>{howManyUsersExist}</h1>
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

        <div className='w-full px-10 my-14 flex flex-col space-y-8'>
          <h1 className='text-4xl text-neutral-300 text-center'>Ban an user</h1>

          <div className='flex w-full'>
              <form className='w-full flex' onSubmit={PreventDefault}>

              <input value={input} onChange={(e) => handleInputChanges(e)} className='bg-transparent border border-neutral-200 border-2 text-neutral-300 text-2xl w-11/12 mx-20 rounded-lg px-4 py-2' placeholder='Name of the user'></input>
              <button type='submit'>
                <AiOutlineSearch className='text-white text-xl'/>
              </button>
              </form>

          </div>

        </div>

        <div className='w-full my-8 space-y-4 flex flex-col'>
          {dataFromUserForTheCard &&
           <div key={dataFromUserForTheCard.id} className='w-full p-8 border border-t-transparent border-x-transparent border-neutral-300 flex items-center'>
              <img className='w-20 h-20 rounded-full' alt={'foto'} src={dataFromUserForTheCard.profile_picture}></img>

              <div className='flex flex-col items-center w-full'>
                <h1 className='text-2xl text-neutral-300'>{dataFromUserForTheCard.id}</h1>
                <h1 className='text-2xl text-neutral-300'>{dataFromUserForTheCard.name}</h1>
                <button onClick={banUser} className='bg-gray-700 hover:bg-red-700 mt-4 text-2xl rounded-lg px-4 py-2 text-neutral-300'>Ban User</button>
              </div>

            </div>
          }
        </div>

      </div>
    </div>
  )
}
