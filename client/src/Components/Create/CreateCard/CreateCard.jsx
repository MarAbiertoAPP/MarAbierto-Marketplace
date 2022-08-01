import React from 'react'
import Classes from './CreateCard.module.css'
import PropTypes from 'prop-types'
import '../../Home/toast.css'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
export default function CreateCard ({ title, image, price, id }) {
  CreateCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string
  }
  const [t] = useTranslation('faq')
  return (
    <motion.div
    className={Classes.container}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    >
      <div className={Classes.card}>
        <div className={Classes.imgBx}>

            <img src={image} alt="pic"></img>

        </div>
        <div className={Classes.contentBx}>
          <h2>{title}</h2>
          <div className={Classes.color}>
            <h3>Price :</h3>
            <span>{price} ETH</span>
          </div>
          <button className='bg-purple-700 hover:bg-purple-900'>{t('AddToCart.AddToCart')}</button>
        </div>
      </div>
    </motion.div>
  )
}
