import React from 'react'
import style from './CreateDetailNFT.module.css'
import TitleDetails from './Title/TitleDetails'

import TitleLikesSM from './TitleLikesSM/TitleLikesSM'
import RenderImg from './RenderImg/RenderImg'
import TitleLikesXL from './TitleLikesXL/TitleLikesXL'
import DetailsDescription from './DetailsDescription/DetailsDescription'
import CurrentPriceDetail from './CurrentPriceDetail/CurrentPriceDetail'
import CurrentOwner from './CurrentOwner/CurrentOwner'

// import Footer from '../../Footer/Footer'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

export default function CreateDetailNFT (props) {
  CreateDetailNFT.propTypes = {
    title: PropTypes.any,
    path: PropTypes.any,
    description: PropTypes.any,
    price: PropTypes.any,
    user: PropTypes.any,
    collection: PropTypes.any

  }
  const loadingNFT = 'https://i0.wp.com/techweez.com/wp-content/uploads/2018/05/minion.gif?fit=748%2C561&ssl=1'
  return (
    <motion.div
    className={style.div}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <div className={'mt-10 flex flex-col items-center w-screen max-w-screen-xl '} >

        <TitleDetails title={props.title}/>
        <TitleLikesSM title={props.title}/>

        <div className={`my-6 flex flex-col xl:flex-row w-full min-h-min xl:${style.limitH} pb-9`}>

          <RenderImg img={typeof props.path.type === 'string' ? loadingNFT : props.path}/>
          <div className='flex flex-col basis-8/12 '>

            <TitleLikesXL title={props.title}/>
            <DetailsDescription description={props.description} collection={props.collection}/>

            <div className='w-full p-4 md:px-14 xl:p-8 '>

              <CurrentPriceDetail price={props.price}/>
              <CurrentOwner user={props.user}/>

            </div>

          </div>

        </div>
      </div>
      {/* <Footer/> */}
    </motion.div>

  )
}
