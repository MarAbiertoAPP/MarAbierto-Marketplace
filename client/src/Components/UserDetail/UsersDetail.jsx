import React, { useEffect, useState } from 'react'
import style from './UserDetail.module.css'
import Nav from '../UI/Nav/Navigation'
import Footer from '../Footer/Footer'
// import Card from '../UI/Card/Card'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import CardUserDetail from './UseDetailResources/CardUserDetail'

import { /* AiOutlineTwitter, AiOutlineMore,  */SiPhpmyadmin } from 'react-icons/si'
// import { FaShareAlt } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
// aqui va la data simulada
// import fotouser from '../../assests/demo/fotouser.jpeg'
import background from '../../assests/demo/background.webp'
import { getAllFavorites } from '../../Redux/Actions/ActionsDetail'
import Carousel from '../NewHome/newHomeResources/Carousel'
import { getAllCollection } from '../../Redux/Actions'
import CarouselSM from '../NewHome/newHomeResources/CarouselSM'
import axios from 'axios'

const UsersDetail = (props) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { Favorites } = useSelector(state => state)
  const Collection = useSelector(state => state.Collection)
  const [tab, setTab] = useState(0)
  const [owned, setOwned] = useState()
  const [creator, setCreator] = useState()
  const [user, setUser] = useState()

  useEffect(() => {
    axios.get(`/users/user/${id}`).then(res => setUser(res.data))
  }, [id])

  useEffect(() => {
    dispatch(getAllCollection())
  }, [user])

  useEffect(() => {
    dispatch(getAllFavorites(user?.id))
    axios.get(`/nft/owner/${user.id}`).then(res => setOwned(res.data))
    axios.get(`/nft/creator/${user.id}`).then(res => setCreator(res.data))
  }, [user])

  const tabHandler = () => {
    return setTab(1)
  }

  const tabOneHandler = () => {
    return setTab(2)
  }

  const tabTwoHandler = () => {
    return setTab(3)
  }

  const [t] = useTranslation('faq')
  return (

    <div className={style.div}>

      <Nav/>
      <div className='w-full max-w-screen-xl'>

        <div className='object-contain mt-12 w-full h-96 max-w-screen-xl'>
          <img className='w-full h-full' src={background}></img>
        </div>

        <div className='w-full flex justify-center xl:justify-start'>
          <img
            className='aspect-auto shadow-2xl shadow-black box -mt-40 xl:ml-20 w-72 h-72 md:w-96 md:h-96 xl:w-48 xl:h-48 rounded-full'
            src={user?.profile_picture}></img>
        </div>

        <div className='-mt-10 w-full'>

          <div className='w-full mt-10 flex flex-col xl:flex-row'>

            <div className='basis-5/12 space-y-2 text-center xl:text-start'>
              <h1 className='text-white text-6xl capitalize'>{user?.nickname}</h1>
              {/* <h1 className='text-white text-xl'>{data.address}</h1> */}

              <h1 className='text-white'>{`Joined ${user?.createdAt?.slice(0, 10)}`}</h1>
              {/* <p className='text-white'>{data.description}</p> */}

              <p className='text-white'> {user?.id}</p>
            </div>

            <div className='basis-4/12'>

            </div>

            <div className='basis-3/12'>
              <div className='flex place-content-around items-center my-8 xl:my-0'>
                {/*  <AiOutlineTwitter className='text-5xl text-white'/> */}
                {/*  <FaShareAlt className='text-4xl text-white'/> */}
                {/* <AiOutlineMore className='text-5xl text-white'/> */}
                {
                  user && user.typeUser === 'SU'
                    ? (
                      <Link to='/AdminPanel' className='text-white text-5xl'>
                        <SiPhpmyadmin className='text-white'/>
                      </Link>
                      )
                    : null}
              </div>

            </div>

          </div>

          <div className='w-full p-6 flex space-x-20'>
            {owned?.length > 0 &&
              <button onClick={tabHandler}
                      className='text-lg text-white font-semibold  underline underline-offset-4 decoration-transparent decoration-solid hover:decoration-current'>{t('Collected.Collected')}</button>
            }

            {Favorites?.length > 0 &&
              <button onClick={tabOneHandler}
                      className='text-lg text-white font-semibold  underline underline-offset-4 decoration-transparent decoration-solid hover:decoration-current'>{t('Favorites.Favorites')}</button>
            }
            {
              creator?.length > 0 &&
              <button onClick={tabTwoHandler}
                      className='text-lg text-white font-semibold  underline underline-offset-4 decoration-transparent decoration-solid hover:decoration-current'>{t('Created.Created')}</button>
            }

          </div>

        </div>

        <div className='flex flex-row flex-wrap justify-center'>
          {tab === 0 &&
            <div className='w-full max-w-screen-xl mt-24 space-y-14 flex flex-col justify-center'>
              <h1 className='text-3xl text-center text-neutral-300'> Last Drops</h1>

              <div className='w-full'>

                <div className='hidden xl:flex mb-20 capitalize'>
                  <Carousel data={Collection.collections}/>

                </div>

                <div className='xl:hidden mb-20 capitalize'>
                  <CarouselSM data={Collection.collections}/>
                </div>

              </div>

            </div>
          }

          {/* collected */}
          {tab === 1 && owned?.map((item, index) => {
            return <CardUserDetail key={index} title={item.title} image={item.img} price={item.price} id={item.id}/>
          })}
          {/* Favorites */}
          {tab === 2 && Favorites?.map((item, index) => {
            return <CardUserDetail key={index} title={item.title} image={item.img} price={item.price} id={item.id}/>
          })}
          {/* created */}
          {tab === 3 && creator?.map((item, index) => {
            return <CardUserDetail key={index} title={item.title} image={item.img} price={item.price} id={item.id}/>
          })}

        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default UsersDetail
