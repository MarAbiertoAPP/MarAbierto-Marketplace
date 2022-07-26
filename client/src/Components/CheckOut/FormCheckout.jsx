import React from 'react'
import { PaymentElement } from '@stripe/react-stripe-js'

const CheckoutForm = () => {
  return (
    <form className='w-96 flex flex-col justify-center'>
      <PaymentElement />
      <button className='text-white p-4 my-6 bg-rose-500 rounded-lg'>Submit</button>
    </form>
  )
}

export default CheckoutForm
