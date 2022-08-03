
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './Details.module.css'
import TitleDetails from './Title/TitleDetails'
import axios from 'axios'
import TitleLikesSM from './TitleLikesSM/TitleLikesSM'
import RenderImg from './RenderImg/RenderImg'
import TitleLikesXL from './TitleLikesXL/TitleLikesXL'
import DetailsDescription from './DetailsDescription/DetailsDescription'
import CurrentPriceDetail from './CurrentPriceDetail/CurrentPriceDetail'
import CurrentOwner from './CurrentOwner/CurrentOwner'
import ButtonsDetails from './ButtonsDetails/ButtonsDetails'
import Nav from '../UI/Nav/Navigation'
import Footer from '../Footer/Footer'
import { motion } from 'framer-motion'

const Details = () => {
  const { id } = useParams()
  const [nftDetail, setNftDetail] = useState({})

  useEffect(() => {
    window.scrollTo(0, 0)
    axios.get(`/nft/detail/${id}`)
      .then(response => setNftDetail(response.data))
  }, [])

  return (
    <motion.div
    className={style.div}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}security
    >
      <div className={'mt-10 flex flex-col items-center w-screen max-w-screen-xl'} >
      <Nav/>
        <TitleDetails title={nftDetail?.collection?.name} />
        <TitleLikesSM title={nftDetail?.title}/>

        <div className={`my-6 flex flex-col xl:flex-row w-full min-h-min xl:${style.limitH} pb-9`}>

          <RenderImg img={nftDetail?.img}/>
          <div className='flex flex-col basis-8/12 '>

            <TitleLikesXL title={nftDetail?.title}/>
            <DetailsDescription description={nftDetail?.collection?.description}/>

            <div className='w-full p-4 md:px-14 xl:p-8 '>

              <CurrentPriceDetail price={nftDetail?.price}/>
              <CurrentOwner user={nftDetail?.User}/>
              <ButtonsDetails />

              <div className='w-full flex justify-center'>
                <p className='mt-4 text-md self-auto text-neutral-400 tracking-wider'>By clicking &quot;Buy now&quot; or &quot;Make an offer&quot;, you agree to the Terms of Service</p>
              </div>

            </div>

          </div>

        </div>
      </div>
      <Footer/>
    </motion.div>

  )
}

export default Details
