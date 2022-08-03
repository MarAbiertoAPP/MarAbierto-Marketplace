import React, { useEffect, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import ItemsCart from './ItemsCart'
import { useSelector } from 'react-redux'
import CheckoutForm from './FormCheckout'
import axios from 'axios'
import Nav from '../UI/Nav/Navigation'

const stripePromise = loadStripe('pk_test_51LOPfmJVPjWVJr6N63nReuOKhebPKvDMrQteVj0tfUMRkNbCCethuo2cTgd1t0xsLQQco6lyYClRaUMUWCiAXL8M00abWXdmci')

export default function Checkout () {
  const [secret, setSecret] = useState('')

  const { BuyNow, Cart } = useSelector(state => state)
  const checkoutNft = BuyNow.length ? BuyNow : Cart
  const ethereumValue = useSelector(state => state.Conv.ethereum.usd)

  useEffect(() => {
    let totalBuy = 0

    checkoutNft.map(item => {
      totalBuy = totalBuy + Number(item.price.toFixed(3))

      return totalBuy
    })
    const nftValue = {
      totalBuy,
      ethereumValue
    }

    if (checkoutNft.length) {
      axios.post('/payment', { nftValue })
        .then(response => setSecret(response.data.client_secret))
    }
  }, [checkoutNft])

  const options = {
    // passing the client secret obtained in step 2
    clientSecret: secret,
    // Fully customizable with appearance API.
    appearance: {
      theme: 'night',
      variables: {
        fontFamily: ' "Gill Sans", sans-serif',
        fontLineHeight: '1.5',
        borderRadius: '10px',
        // colorBackground: '#FCDF07',
        colorPrimaryText: '#000000',
        colorText: '#FFFFFF'
      },
      rules: {
        '.Block': {
          backgroundColor: 'var(--colorBackground)',
          boxShadow: 'none',
          padding: '12px'
        },
        '.Input': {
          padding: '12px'
        },
        '.Input:disabled, .Input--invalid:disabled': {
          color: 'lightgray'
        },
        '.Input:focus': {
          border: 'none',
          boxShadow: '0px 1px 1px rgba(217, 33, 171, 0.56), 0px 3px 7px rgba(217, 33, 171, 0.56)'
        },
        '.Tab': {
          padding: '10px 12px 8px 12px',
          border: 'none'
        },
        '.Tab:hover': {
          border: 'none',
          boxShadow: '0px 1px 1px rgba(217, 33, 171, 0.56), 0px 3px 7px rgba(217, 33, 171, 0.56)'
        },
        '.Tab--selected, .Tab--selected:focus, .Tab--selected:hover': {
          border: 'none',
          backgroundColor: '#fff',
          boxShadow: '0 0 0 1.5px rgba(217, 33, 171, 0.56), 0px 1px 1px rgba(217, 33, 171, 0.56), 0px 3px 7px rgba(217, 33, 171, 0.56)'
        },
        '.Label': {
          fontWeight: '500'
        }
      }
    }
  }

  if (secret) {
    return (
      <div>
        <Nav/>
      <div className='flex flex-col xl:flex-row justify-center xl:space-x-40 min-h-screen items-center'>
        <div>
          <ItemsCart />
        </div>
        <div className='p-8 rounded-lg'>

          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
          </Elements>

        </div>
      </div>
      </div>
    )
  }

  return (
    <h1 className='text-white'>CARGANDO</h1>
  )
}
