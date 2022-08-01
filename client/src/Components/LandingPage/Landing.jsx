import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userFromLocalStorage } from '../../Redux/Actions/index'
import landing from '../LandingPage/landing.module.css'
import nftData from '../LandingPage/SliderNftData'
import EmblaCarousel from './Carousel/EmblaCarousel'
import logoPMA from '../../assests/LogoPMA.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const SLIDE_COUNT = nftData.length
const slides = Array.from(Array(SLIDE_COUNT).keys())
export default function Landing () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userFromLocalStorage())
  }, [])
  return (
      <motion.div
      className={landing.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      >

        <div className={`xl:${landing.limitH} flex flex-col  w-screen max-w-screen-xl `}>

        <div className="hidden xl:m-2 md:flex md:flex-start max-h-24 max-w-fit">
          <img className="object-cover" src={logoPMA} alt='logo'></img>
        </div>

        <div className="flex flex-col xl:flex-row w-full justify-center content-center text-center">

          <div className='flex flex-col xl:flex-row'>

            <h1 className=" text-6xl tracking-wider text-cyan-500">Mar</h1>
            <h1 className="text-6xl tracking-wider  text-amber-600 mx-8 ">Abierto</h1>
          </div>

          <div className=" flex place-self-center">
            <h1 className=" text-4xl self-auto text-neutral-400 tracking-wider" >  NFT MARKETPLACE</h1>

          </div>

        </div>

        <div className="   flex flex-col xl:flex-row w-full justify-center">

          <div className="basis-5/12 mb-8 md:m-11" >
           <EmblaCarousel slides={slides}/>
          </div>

          <div className="basis-5/12 m-11 flex flex-col items-center -mt-4 xl:mt-16">
            <p className="xl:p-10 xl:py-20 text-center w-12/12 text-2xl md:text-4xl text-neutral-200">NFTs are designed to give you something that cant be copied.</p>

            <Link to="/newhome">
              <button className= {`${landing.toHomeButton} mt-8 xl:mt-0 `}>EXPLORE</button>
            </Link>
          </div>

        </div>

      </div>
    </motion.div>

  )
}
