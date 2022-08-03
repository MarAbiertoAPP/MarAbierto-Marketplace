import React from 'react'
import PropTypes from 'prop-types'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../../Home/toast.css'
import { motion } from 'framer-motion'
import { FaEthereum } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { passDetail } from '../../../Redux/Actions/ActionsDetail'
import { addToCart } from '../../../Redux/Actions/ActionsCart'
import { useTranslation } from 'react-i18next'
export default function Card ({ title, image, price, id, collectionName, secondWidth }) {
  const [t] = useTranslation('faq')
  const dispatch = useDispatch()
  const handleDetail = () => {
    dispatch(passDetail({
      title,
      image,
      price,
      id,
      collectionName
    }))
  }

  const { Cart } = useSelector(state => state)

  Card.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
    collectionName: PropTypes.string,
    secondWidth: PropTypes.bool
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
    className={ secondWidth
      ? 'w-60 mx-2 my-2 text-white border rounded-lg border-[#5c1c5c6b] p-4 relative hover:shadow-[0_10px_50px_1px_rgba(25,25,205,0.3)]  hover:border-[rgba(25,25,205,0.3)]'
      : 'w-72 mx-4 my-4 text-white border rounded-lg border-[#5c1c5c6b] p-4 relative hover:shadow-[0_10px_50px_1px_rgba(25,25,205,0.3)]  hover:border-[rgba(25,25,205,0.3)]' }

    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    >
        <div className='h-72 box-border rounded-lg w-full'>
          <Link className='flex justify-center' onClick={handleDetail} to={`/detail/${id}`}>
            <img className='object-cover h-72 w-full rounded-lg' src={image} alt="pic"></img>
          </Link>
        </div>
        <h2 className='text-base font-extrabold mt-4 capitalize'>{title}</h2>
        <h3 className='text-sm capitalize'>{collectionName}</h3>
        <div>
          <p className='flex items-center py-3 pb-16 text-sm'>{`${t('nftPrice.price')}: ${price}`} <FaEthereum /></p>
        </div>
        <button className= { secondWidth ? 'w-4/6 flex justify-center items-center bg-purple-900/80 hover:bg-purple-700 py-2 rounded-xl absolute bottom-4 left-0 right-0 m-auto p-2 ' : 'w-4/6 flex justify-center items-center bg-purple-900/80 hover:bg-purple-700 py-2 rounded-full absolute bottom-4 left-0 right-0 m-auto p-2 '} onClick={(e) => isAuthenticated ? handleBuy(e) : loginWithRedirect()}><FiShoppingCart className= { secondWidth ? '   mr-4 text-orange-500' : ' mr-2 text-lime-500'} />{t('AddToCart.AddToCart')}</button>
    </motion.div>
  )
}

// import React from 'react'
// import Classes from './card.module.css'
// import PropTypes from 'prop-types'
// import { useAuth0 } from '@auth0/auth0-react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import Swal from 'sweetalert2'
// import '../../Home/toast.css'
// import { motion } from 'framer-motion'
// import { passDetail } from '../../../Redux/Actions/ActionsDetail'
// import { addToCart } from '../../../Redux/Actions/ActionsCart'
// import { useTranslation } from 'react-i18next'

// export default function Card ({ title, image, price, id, secondWidth }) {
//   const [t] = useTranslation('faq')
//   const dispatch = useDispatch()
//   const handleDetail = () => {
//     dispatch(passDetail({
//       title,
//       image,
//       price,
//       id
//     }))
//   }

//   const { Cart } = useSelector(state => state)

//   Card.propTypes = {
//     title: PropTypes.string,
//     image: PropTypes.string,
//     price: PropTypes.number,
//     id: PropTypes.string,
//     secondWidth: PropTypes.bool,
//     languaje: PropTypes.string
//   }
//   const { isAuthenticated, loginWithRedirect } = useAuth0()
//   const handleBuy = () => {
//     if (Cart.find(i => i.id === id)) {
//       const Toast = Swal.mixin({
//         toast: true,
//         position: 'top-right',
//         iconColor: 'white',
//         customClass: {
//           popup: 'colored_toast'
//         },
//         showConfirmButton: false,
//         timer: 1800,
//         timerProgressBar: true
//       })
//       Toast.fire({
//         icon: 'info',
//         title: 'Current item is already in your shopping cart'
//       })
//     } else {
//       const Toast = Swal.mixin({
//         toast: true,
//         position: 'top-right',
//         iconColor: 'white',
//         customClass: {
//           popup: 'colored_toast'
//         },
//         showConfirmButton: false,
//         timer: 1800,
//         timerProgressBar: true
//       })
//       Toast.fire({
//         icon: 'success',
//         title: 'item added to your shopping cart'
//       })
//       return dispatch(
//         addToCart({
//           title,
//           image,
//           price,
//           id
//         }
//         )
//       )
//     }
//   }

//   return (
//     <motion.div
//     className={ secondWidth ? Classes.container2 : Classes.container }
//     initial={{ opacity: 0 }}
//     whileInView={{ opacity: 1 }}
//     >
//       <div className={Classes.card}>
//         <div className={Classes.imgBx}>
//           <Link onClick={handleDetail} to={`/detail/${id}`}>
//             <img src={image} alt="pic"></img>
//           </Link>
//         </div>
//         <div className={Classes.contentBx}>
//           <h2>{title}</h2>
//           <div className={Classes.color}>
//             <h3>{t('nftPrice.price')}: </h3>
//             <span>{price} ETH</span>
//           </div>
//           <button className='bg-purple-700 hover:bg-purple-900' hidden={'hidden'} onClick={(e) => isAuthenticated ? handleBuy(e) : loginWithRedirect()}>{t('card.addToCart')}</button>
//         </div>
//       </div>
//     </motion.div>
//   )
// }
