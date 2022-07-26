import React, { useEffect, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import ItemsCart from './ItemsCart'

import CheckoutForm from './FormCheckout'
import axios from 'axios'

const stripePromise = loadStripe('pk_test_51LOX0hJn83pmuJ1bSTKmW3P4a8D6StL0A8FQqviUBtoDuqKybEKTb2f8chYBTRMsHYmJvNGeafjQXpV3e0b9PydQ00k8iq7OIN')

export default function Checkout () {
  const [secret, setSecret] = useState('')

  useEffect(() => {
    axios.get('/secret')
      .then(response => setSecret(response.data.client_secret))
  }, [])

  const options = {
    // passing the client secret obtained in step 2
    clientSecret: secret,
    // Fully customizable with appearance API.
    appearance: {
      theme: 'night',
      labels: 'floating'
    }
  }

  if (secret) {
    return (
      <div className='flex justify-center space-x-40 min-h-screen items-center'>
        <div>
          <ItemsCart />
        </div>
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      </div>
    )
  }

  return (
    <h1>Probablemente estoy valiendo vrg</h1>
  )
}
