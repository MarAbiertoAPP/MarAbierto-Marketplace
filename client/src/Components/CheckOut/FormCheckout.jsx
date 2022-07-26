import React from 'react'
import { PaymentElement } from '@stripe/react-stripe-js'

const CheckoutForm = () => {
  return (
    <form className='w-96 flex flex-col justify-center'>
      <PaymentElement />
      <button className='text-white p-4 my-6 bg-purple-800 hover:bg-purple-700 rounded-lg'>Submit</button>
    </form>
  )
}

export default CheckoutForm
