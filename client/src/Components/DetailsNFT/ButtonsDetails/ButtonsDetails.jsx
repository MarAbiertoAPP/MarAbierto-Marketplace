import React from 'react'
import Swal from 'sweetalert2'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addToCart, buyNow } from '../../../Redux/Actions/ActionsCart'
import { useTranslation } from 'react-i18next'
import { useAuth0 } from '@auth0/auth0-react'
const ButtonsDetails = (props) => {
  const { Cart } = useSelector(state => state)
  const { detail } = useSelector(state => state)
  const { id } = useParams()
  const dispatch = useDispatch()
  const [t] = useTranslation('faq')
  const navigate = useNavigate()

  const { isAuthenticated, loginWithRedirect } = useAuth0()

  const handleBuyNow = () => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, buy it!'
    }).then((result) => {
      if (result.value) {
        dispatch(buyNow({
          title: detail.title,
          image: detail.image,
          price: detail.price,
          id: detail.id
        }))
        navigate('/checkout')
      }
    })
  }

  const handleAddToCart = () => {
    if (Cart.find(i => i.id === Number(id))) {
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
          title: detail.title,
          image: detail.image,
          price: detail.price,
          id: detail.id

        }
        )
      )
    }
  }

  return (
    <div className='flex flex-col md:flex-row space-around mt-20 space-y-4 md:space-y-0'>
        <button onClick={(e) => isAuthenticated ? handleBuyNow(e) : loginWithRedirect()} className='basis-4/12 bg-purple-700 hover:bg-purple-900 mx-8 text-2xl py-4 rounded-2xl'>{t('buyNow.buyNow')}</button>
       {/*  <button className='basis-4/12 bg-amber-600 mx-8 text-2xl py-4'>{t('makeOffer.makeOffer')}</button> */}
        <button onClick={(e) => isAuthenticated ? handleAddToCart(e) : loginWithRedirect()} className='basis-4/12 bg-purple-700 hover:bg-purple-900 mx-8 text-2xl py-4 rounded-2xl'>{t('AddToCart.AddToCart')}</button>
    </div>
  )
}

export default ButtonsDetails
