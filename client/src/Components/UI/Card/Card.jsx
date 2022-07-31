import React from 'react'
import Classes from './card.module.css'
import PropTypes from 'prop-types'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../../Home/toast.css'
import { motion } from 'framer-motion'
import { passDetail } from '../../../Redux/Actions/ActionsDetail'
import { addToCart } from '../../../Redux/Actions/ActionsCart'
import { useTranslation } from 'react-i18next'

export default function Card ({ title, image, price, id, secondWidth }) {
  const [t] = useTranslation('faq')
  const dispatch = useDispatch()
  const handleDetail = () => {
    dispatch(passDetail({
      title,
      image,
      price,
      id
    }))
  }

  const { Cart } = useSelector(state => state)

  Card.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    secondWidth: PropTypes.bool,
    languaje: PropTypes.string
  }
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  const handleBuy = () => {
    if (Cart.find(i => i.id === id)) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: 'white',
        customClass: {
          popup: 'colored_toast'
        },
        showConfirmButton: false,
        timer: 1800,
        timerProgressBar: true
      })
      Toast.fire({
        icon: 'info',
        title: 'Current item is already in your shopping cart'
      })
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: 'white',
        customClass: {
          popup: 'colored_toast'
        },
        showConfirmButton: false,
        timer: 1800,
        timerProgressBar: true
      })
      Toast.fire({
        icon: 'success',
        title: 'item added to your shopping cart'
      })
      return dispatch(
        addToCart({
          title,
          image,
          price,
          id
        }
        )
      )
    }
  }

  return (
    <motion.div
    className={ secondWidth ? Classes.container2 : Classes.container }
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    >
      <div className={Classes.card}>
        <div className={Classes.imgBx}>
          <Link onClick={handleDetail} to={`/detail/${id}`}>
            <img src={image} alt="pic"></img>
          </Link>
        </div>
        <div className={Classes.contentBx}>
          <h2>{title}</h2>
          <div className={Classes.color}>
            <h3>{t('nftPrice.price')}: </h3>
            <span>{price} ETH</span>
          </div>
          <button className='bg-purple-700 hover:bg-purple-900' hidden={'hidden'} onClick={(e) => isAuthenticated ? handleBuy(e) : loginWithRedirect()}>{t('card.addToCart')}</button>
        </div>
      </div>
    </motion.div>
  )
}
