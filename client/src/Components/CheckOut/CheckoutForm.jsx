import React, { useState } from 'react'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Card from '../UI/Card/Card'
import '../CheckOut/Checkout.css'
import axios from 'axios'

const stripePromise = loadStripe(
  'pk_test_51LOPfmJVPjWVJr6N63nReuOKhebPKvDMrQteVj0tfUMRkNbCCethuo2cTgd1t0xsLQQco6lyYClRaUMUWCiAXL8M00abWXdmci'
)
const Checkoutform = () => {
  const elements = useElements()
  const stripe = useStripe()
  const [isdata, setIsdata] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)

    })
    if (!error) {
      const { id } = paymentMethod
      console.log(paymentMethod)
      try {
        const { data } = await axios.post('/users/getpay', {
          id,
          amount: 2000
        })
        console.log(data)
        elements.getElement(CardElement).clear()
        setIsdata(data)
      } catch (error) {
        console.log(`ocurrio un error ver:${error}`)
      }
    }
  }

  return (
<div className='checkout_container' >
<Card title={'Shibuya Crossing by Larienne - Core Crypto 2021 (64 of 150)'}
image={'https://img.seadn.io/files/a89ffcc1a2d3fa58c64bafe8a301879c.jpg?fit=max&h=1200&w=1200&auto=format'} price={ 0.099} />
<form className='form_container' onSubmit={handleSubmit}>

<CardElement />
<button className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
  PAY
  </button>
    </form>
    {isdata ? <h1 className='text-zinc-100 text-5xl'>PAGO REALIZADO CON EXITO</h1> : <h2 className='text-4xl text-red-600'>PROCESANDO PAGO...</h2>}

</div>

  )
}

const Checkout = () => {
  return (
    <Elements stripe={stripePromise} >
      <Checkoutform />
    </Elements>
  )
}

export default Checkout
