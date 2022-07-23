import React, { useState } from 'react'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
// import Card from '../UI/Card/Card'
import '../CheckOut/Checkout.css'
import axios from 'axios'
import { useSelector } from 'react-redux'

const stripePromise = loadStripe(
  'pk_test_51LOPfmJVPjWVJr6N63nReuOKhebPKvDMrQteVj0tfUMRkNbCCethuo2cTgd1t0xsLQQco6lyYClRaUMUWCiAXL8M00abWXdmci'
)
const Checkoutform = () => {
  const elements = useElements()
  const stripe = useStripe()
  const [nodata, setNodata] = useState()
  const [isdata, setIsdata] = useState(false)
  const checkoutNft = useSelector(state => state.Cart)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    }
    )

    let totalBuy = 0
    checkoutNft.map(item => {
      totalBuy = totalBuy + item.price
      return totalBuy
    }
    )

    if (!error) {
      const { id } = paymentMethod
      console.log(paymentMethod)
      try {
        const { data } = await axios.post('/users/getpay', {
          id,
          amount: totalBuy * 150000
        })
        console.log(data)
        elements.getElement(CardElement).clear()
        setNodata(false)
        setIsdata(data)
      } catch (error) {
        console.log(`ocurrio un error ver:${error}`)
      }
    }
  }

  return (
    <div >
      <div >
        <ul className={'text-white flex flex-nowrap m-40'}>
          {checkoutNft.map((e) => (
            <li key={e.id}>
                <h6 className='text-xs'>{e.title}</h6>
              <div>
                <li>
                <img
                  src={e.image}
                  alt={e.title}
                  className="h-40 w-40 object-cover object-center"
                />
                </li>
                <p>Eth {e.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <form className='form_container' onSubmit={handleSubmit}>

        <CardElement />
        <button className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full'>
          PAY
        </button>
      </form>
      {isdata && <h1 className='text-zinc-100 text-5xl'>PAGO REALIZADO CON EXITO</h1> }
      {nodata && <h2 className='text-red-100 text-5xl' > PROCESANDO PAGO...</h2>}
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
