import React, { useEffect, useState } from 'react'
import style from './CollectionNewHome.module.css'

// import foto from '../../assests/demo/fotouser.jpeg'

import Nav from '../UI/Nav/Navigation'
import Card from '../UI/Card/Card'
import { FaDiscord, FaTwitter, FaShareAlt } from 'react-icons/fa'
import { RiFilterFill, RiFilterOffFill } from 'react-icons/ri'
import { BsGridFill, BsGrid3X3GapFill } from 'react-icons/bs'
import { AiFillStar, AiOutlineMore } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { cleanCollectionByName, getCollectionByName } from '../../Redux/Actions'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SearchBar from './SearchBar'
import FilterPrice from './FilterPrice'

export default function CollectionNewHome (props) {
  const [t] = useTranslation('faq')
  const dispatch = useDispatch()
  const { name } = useParams()
  const [width, setWidth] = useState(false)
  const [filt, setFilt] = useState(false)

  const changeWidth = () => {
    setWidth(!width)
  }

  const { CollName } = useSelector(state => state)
  const { title } = useSelector(state => state.filterCollec)
  const { price } = useSelector(state => state.filterCollec)

  useEffect(() => {
    const collectionCofig = {
      name,
      title,
      price
    }
    dispatch(getCollectionByName(collectionCofig))
    return () => dispatch(cleanCollectionByName())
  }, [title, price])

  return (
    <div className={style.div} >
      <Nav/>

      <div className='w-full max-w-screen-xl my-12'>
        <img className='w-full h-96 object-cover' src={CollName.collectionS?.frontPage}></img>

        <div className='w-full flex'>

            <div className='basis-8/12'>
              <img className='ml-14 -mt-40 h-56 w-56 rounded-full shadow-purple-900 shadow-2xl' src={CollName.collectionS?.mini}></img>
              <div className='flex flex-col space-y-2 text-start mt-2'>
                <h1 className='text-purple-700 text-3xl font-bold capitalize'>{CollName.collectionS?.name}</h1>
                <h1 className='text-neutral-300 text-xl'>{'By: \'user of collection \' '}</h1>
                <h1 className='text-neutral-300 text-lg'>{CollName.collectionS?.description}</h1>
              </div>

            </div>

            <div className='basis-4/12 flex space-x-8 mt-4'>
                <div className='flex space-x-10 h-fit items-center'>

                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-neutral-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                  </svg>

                  <FaDiscord className='text-4xl text-neutral-300'/>
                  <FaTwitter className='text-4xl text-neutral-300'/>
                  <FaShareAlt className='text-4xl text-neutral-300'/>
                  <AiFillStar className='text-5xl text-neutral-300' />
                  <AiOutlineMore className='text-6xl font-bold text-neutral-300'/>
                  </div>

                </div>
        </div>

        <div className=' flex mt-4'>
          <div className='space-x-20 basis-8/12 flex'>

            <div className='flex flex-col'>
              <h1 className='text-purple-700 font-semibold text-3xl'>{CollName.nfts?.length}</h1>
              <h1 className='text-neutral-300 text-xl font-bold'>Items</h1>
            </div>

            <div className='flex flex-col'>
              <h1 className='text-purple-700  font-semibold text-3xl'>{'1.6K'}</h1>
              <h1 className='text-neutral-300 text-xl font-bold'>{t('owner.owner')}</h1>
            </div>

            <div className='flex flex-col'>
              <h1 className='text-purple-700  font-semibold text-3xl'>{'3000'}</h1>
              <h1 className='text-neutral-300 text-xl font-bold'>{t('solded.solded')}</h1>
            </div>

            <div className='flex flex-col'>
              <h1 className='text-purple-700  font-semibold text-3xl'>{'1.4'}</h1>
              <h1 className='text-neutral-300 text-xl font-bold'>{t('floorPrice.floorPrice')}</h1>
            </div>

            <div className='flex flex-col'>
              <h1 className='text-purple-700 font-semibold text-3xl'>{'44.4'}</h1>
              <h1 className='text-neutral-300 text-xl font-bold'>{t('CeilPrice.CeilPrice')}</h1>
            </div>

          </div>
        </div>

        {/* Filtros y renderizado */}
        <div className='w-full mt-8 flex justify-between items-center border border-x-transparent border-t-transparent border-b-white pb-2'>
          < SearchBar/>
          <div className='flex'>
            <div className='basis-1/12  flex place-content-around p-2' >
              {width ? <button className='text-orange-500 text-2xl' onClick={changeWidth }><BsGridFill/></button> : <button className='text-orange-500 text-3xl ' onClick={changeWidth }><BsGrid3X3GapFill/></button> }
            </div>
            <div className='basis-1/12  flex place-content-around p-2' >
              {filt ? <button className='text-orange-500 text-2xl' onClick={() => setFilt(!filt)}><RiFilterOffFill/></button> : <button className='text-orange-500 text-3xl ' onClick={() => setFilt(!filt)}><RiFilterFill/></button> }
          </div>
          </div>

        </div>
        <div className='w-full flex'>
          {
            filt &&
            <div>
              < FilterPrice/>
            </div>
          }
            <div className=' w-full  flex flex-row flex-wrap justify-center '>
              {CollName.nfts?.map(e => {
                return <Card key={e.id} title={e.title} image={e.img} price={e.price} id={e.id} secondWidth={width} />
              })}
          </div>
        </div>

      </div>
    </div>
  )
}
