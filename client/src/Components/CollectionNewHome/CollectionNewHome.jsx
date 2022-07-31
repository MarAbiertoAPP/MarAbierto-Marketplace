import React, { useEffect, useState } from 'react'
import style from './CollectionNewHome.module.css'

// import foto from '../../assests/demo/fotouser.jpeg'

import Nav from '../UI/Nav/Navigation'
import Card from '../UI/Card/Card'
import { FaDiscord, FaTwitter, FaShareAlt } from 'react-icons/fa'
import { BsGridFill, BsGrid3X3GapFill } from 'react-icons/bs'
import { AiFillStar, AiOutlineMore } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { getCollectionByName } from '../../Redux/Actions'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguajeButton from '../LanguajeButton/LanguajeButton'

// const p1 = 'https://img.seadn.io/files/1b67c8533f921855dde46ce73a32028c.png?auto=format&fit=max&w=828'
// const p2 = 'https://img.seadn.io/files/d6a35930f9a75ea90aecd9a0f913bd65.png?auto=format&fit=max&w=640'
// const p3 = 'https://img.seadn.io/files/862a1240dd3ee5a17a9e4073c6f6bc95.png?fit=max&w=600'
// const p4 = 'https://img.seadn.io/files/7144375ec088526d4cafc2897e54a324.png?fit=max&w=600'
// const p5 = 'https://img.seadn.io/files/3bebdb907036b637a2d4963ca9979c74.png?fit=max&w=600'

// const name1 = 'Music Ape #3777'
// const name2 = 'Music Ape #3333'
// const name3 = 'Music Ape #6666'
// const name4 = 'Music Ape #7777'
// const name5 = 'Music Ape #9999'
// const dataFromApiExample = [
//   { title: name1, image: p1, price: 1.23, id: 1 },
//   { title: name2, image: p2, price: 0.43, id: 2 },
//   { title: name3, image: p3, price: 3.43, id: 3 },
//   { title: name4, image: p4, price: 7.43, id: 4 },
//   { title: name5, image: p5, price: 5.43, id: 5 },
//   { title: name1, image: p1, price: 1.23, id: 1 },
//   { title: name2, image: p2, price: 0.43, id: 2 },
//   { title: name3, image: p3, price: 3.43, id: 3 },
//   { title: name4, image: p4, price: 7.43, id: 4 },
//   { title: name5, image: p5, price: 5.43, id: 5 },
//   { title: name1, image: p1, price: 1.23, id: 1 },
//   { title: name2, image: p2, price: 0.43, id: 2 }

// ]

export default function CollectionNewHome (props) {
  const [t] = useTranslation('faq')
  const dispatch = useDispatch()
  const { name } = useParams()
  const [width, setWidth] = useState(false)

  const changeWidth = () => {
    setWidth(!width)
  }

  const { CollName } = useSelector(state => state)
  console.log(CollName)
  useEffect(() => {
    dispatch(getCollectionByName(name))
  }, [])

  return (
    <div className={style.div} >
      <Nav/>

      <div className='w-full max-w-screen-xl my-12'>
        <img className='w-full h-96 object-cover' src={CollName.collectionS?.frontPage}></img>

        <div className='w-full flex'>

            <div className='basis-8/12'>
              <img className='ml-14 -mt-40 h-56 w-56 rounded-full shadow-purple-900 shadow-2xl' src={CollName.collectionS?.frontPage}></img>
              <div className='flex flex-col space-y-2 text-start mt-2'>
                <h1 className='text-purple-700 text-3xl font-bold'>{CollName.collectionS?.name}</h1>
                <h1 className='text-neutral-300 text-xl'>{'By: \'user of collection \' '}</h1>
                <h1 className='text-neutral-300 text-lg'>{t('music.nftDetail')}</h1>
              </div>

            </div>

            <div className='basis-4/12 flex space-x-8 mt-4'>
                <div className='flex space-x-10 h-fit items-center'>
                  <LanguajeButton/>
                {/* <div className='flex flex-row'>
      <button onClick={() => i18n.changeLanguage('en')} className={'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2'}>en</button>
     <button onClick={() => i18n.changeLanguage('es')} className={'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'}>es</button>
    </div> */}
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
              <h1 className='text-neutral-300 text-xl font-bold'>owners</h1>
            </div>

            <div className='flex flex-col'>
              <h1 className='text-purple-700  font-semibold text-3xl'>{'3000'}</h1>
              <h1 className='text-neutral-300 text-xl font-bold'>solded</h1>
            </div>

            <div className='flex flex-col'>
              <h1 className='text-purple-700  font-semibold text-3xl'>{'1.4'}</h1>
              <h1 className='text-neutral-300 text-xl font-bold'>floor price</h1>
            </div>

            <div className='flex flex-col'>
              <h1 className='text-purple-700 font-semibold text-3xl'>{'44.4'}</h1>
              <h1 className='text-neutral-300 text-xl font-bold'>ceil price</h1>
            </div>

          </div>
        </div>

        <div className='w-full mt-8 flex'>

          <div className='basis-1/12  text-center'>
            <h1 className='p-1 text-white text-2xl'>X</h1>
          </div>

          <div className='basis-5/12  flex items-center'>
            <input className='m-1 w-full h-fit text-xl rounded-xl bg-transparent border-white border-2 text-neutral-300'></input>
          </div>

          <div className='basis-3/12 bg-black  flex items-center'>
            <select className='w-full text-xl text-center'>
                <option>Default</option>

                <option>{t('priceFilter.pricefilter')}</option>
                <option>Price high to low</option>

                <option>Low Popularity</option>
                <option>Hight Popularity</option>

                <option>A - Z</option>
                <option>Z - A</option>

            </select>
          </div>

          <div className='basis-3/12  flex place-content-around p-2' >
            {width ? <button className='text-orange-500 text-2xl' onClick={changeWidth }><BsGridFill/></button> : <button className='text-orange-500 text-3xl ' onClick={changeWidth }><BsGrid3X3GapFill/></button> }

          </div>

        </div>

        <div className=' w-full  flex flex-row flex-wrap justify-center '>

            {CollName.nfts?.map(e => {
              return <Card key={e.id} title={e.title} image={e.path} price={e.price} id={e.id} secondWidth={width} />
            })}

        </div>

      </div>
    </div>
  )
}
