import React, { useState, useEffect } from 'react'
import style from '../AdminPanel.module.css'
import axios from 'axios'
import { AiOutlineSearch } from 'react-icons/ai'

export default function AdminNfts () {
  const [nftQuantity, setnftQuantity] = useState()
  const [input, setInput] = useState('')
  const [dataFromNftForTheCard, setdataFromNftForTheCard] = useState()

  async function getdataFromNftForTheCard (id) {
    const response = await axios.get(`https://marabierto.herokuapp.com/nft/detail/${id}`).then(r => r.data)
    setdataFromNftForTheCard(response)
  }

  function PreventDefault (e) {
    e.preventDefault()
    getdataFromNftForTheCard(input)
  }

  async function banNFT (e, id) {
    e.preventDefault()
    const body = { id }

    await axios.post('https://marabierto.herokuapp.com/nft/bannft', body)
      .then(function (response) {
        alert('user was banned succesfully')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  async function unbanNFT (e, id) {
    e.preventDefault()
    const body = { id }

    await axios.post('https://marabierto.herokuapp.com/nft/unbannft', body)
      .then(function (response) {
        alert('user was unbanned succesfully')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  function handleInputChanges (e) {
    e.preventDefault()
    setInput(e.target.value)
  }

  useEffect((nftQuan) => {
    countNft()
  }, [])

  async function countNft () {
    let nftQuan = 0
    await axios.get('https://marabierto.herokuapp.com/nft')
      .then((response) => {
        nftQuan = response?.data.totalNFT
      })
      .catch(function (error) {
        console.log(error)
      })
    setnftQuantity(nftQuan)
    console.log('aqui la cant de coleccion', nftQuan)
  }

  return (
    <div className='w-full flex flex-col items-center'>

      <div className={`w-full px-10 my-14 flex flex-col ${style.scrollBar} overflow-scroll overflow-x-hidden`}>

        <div className='w-full justify-center flex space-x-20'>

          <div className='w-5/12 border border-neutral-600 border-2 rounded-xl flex flex-col items-center p-4 space-y-4'>

            <h1 className='text-neutral-300 text-6xl'>{nftQuantity}</h1>
            <h1 className='text-neutral-200 text-2xl'>Actual NFTs</h1>

          </div>

          <div className='w-5/12 border border-neutral-600 border-2 rounded-xl flex flex-col items-center p-4 space-y-4'>

            <h1 className='text-neutral-300 text-6xl'>xx7xx</h1>
            <h1 className='text-neutral-200 text-2xl'>New NFTs in the last 7 days</h1>

          </div>

        </div>

        <div className='w-full px-10 my-14 flex justify-center space-x-20'>

          <div className='w-5/12 border border-neutral-600 border-2 rounded-xl flex flex-col items-center p-4 space-y-4'>

           <h1 className='text-neutral-300 text-6xl'>xx222xx</h1>
            <h1 className='text-neutral-200 text-2xl'>Banned NFTs</h1>

          </div>

        </div>

        <div className='w-full px-10 my-14 flex flex-col space-y-8'>
          <h1 className='text-4xl text-neutral-300 text-center'>Ban a NFT</h1>

          <div className='flex w-full'>
              <form onSubmit={(e) => PreventDefault(e) } className='w-full flex' >

              <input value={input} onChange={(e) => handleInputChanges(e)} className='bg-transparent border border-neutral-200 border-2 text-neutral-300 text-2xl w-11/12 mx-20 rounded-lg px-4 py-2' placeholder='ID of the NFT'></input>
              <button type='submit'>
                <AiOutlineSearch className='text-white text-xl'/>
              </button>
              </form>

          </div>

        </div>

        <div className='w-full my-8 space-y-4 flex flex-col'>

          {(dataFromNftForTheCard) &&

            <div key={dataFromNftForTheCard.id} className='w-full p-8 border border-t-transparent border-x-transparent border-neutral-300 flex'>
              <img className='w-96 h-96 rounded-lg object-contain' alt={'foto'} src={dataFromNftForTheCard.img}></img>

              <div className='flex flex-col items-center w-full'>
                <h1 className='text-2xl text-neutral-300'>{dataFromNftForTheCard.id}</h1>
                <h1 className='text-2xl text-neutral-300'>{dataFromNftForTheCard.nickname}</h1>
                {
                  dataFromNftForTheCard.isBanned
                    ? <button onClick={(e) => unbanNFT(e, dataFromNftForTheCard.id)} className='bg-gray-700 hover:bg-red-700 mt-4 text-2xl rounded-lg px-4 py-2 text-neutral-300'>Unban NFT</button>
                    : <button onClick={(e) => banNFT(e, dataFromNftForTheCard.id)} className='bg-gray-700 hover:bg-red-700 mt-4 text-2xl rounded-lg px-4 py-2 text-neutral-300'>Ban NFT</button>
                }
              </div>
            </div>

          }
        </div>

      </div>
    </div>
  )
}
