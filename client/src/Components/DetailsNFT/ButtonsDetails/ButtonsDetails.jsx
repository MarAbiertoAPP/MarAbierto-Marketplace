import React from 'react'
import Swal from 'sweetalert2'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../../../Redux/Actions/ActionsCart'
const ButtonsDetails = (props) => {
  const { Cart } = useSelector(state => state)
  const { detail } = useSelector(state => state)
  const { id } = useParams()
  const dispatch = useDispatch()
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
        <button onClick={handleBuy} className='basis-4/12 bg-amber-600 mx-8 text-2xl py-4'>Buy Now</button>
        <button className='basis-4/12 bg-amber-600 mx-8 text-2xl py-4'>Make offer</button>
        <button onClick={handleBuy} className='basis-4/12 bg-amber-600 mx-8 text-2xl py-4'>Add to cart</button>
    </div>
  )
}

export default ButtonsDetails
