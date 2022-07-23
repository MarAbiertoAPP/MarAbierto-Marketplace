import React from 'react'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(
  'pk_test_51LOPfmJVPjWVJr6N63nReuOKhebPKvDMrQteVj0tfUMRkNbCCethuo2cTgd1t0xsLQQco6lyYClRaUMUWCiAXL8M00abWXdmci'
)
const Checkoutform = () => {
  const elements = useElements()
  const stripe = useStripe()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)

    })
    if (!error) {
      console.log(paymentMethod)
    }
  }

  return (
    <form className='bg-gray-50 flex-row' onSubmit={handleSubmit}>
<CardElement className='ml-30' />
<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
  PAY
  </button>
    </form>

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
