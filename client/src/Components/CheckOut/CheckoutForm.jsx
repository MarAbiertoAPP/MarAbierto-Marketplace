
import React, { useState } from 'react'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
// import Card from '../UI/Card/Card'
import style from '../CheckOut/Checkout.module.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { FaTrashAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
const stripePromise = loadStripe(
  'pk_test_51LOPfmJVPjWVJr6N63nReuOKhebPKvDMrQteVj0tfUMRkNbCCethuo2cTgd1t0xsLQQco6lyYClRaUMUWCiAXL8M00abWXdmci'
)
const Checkoutform = () => {
  const elements = useElements()
  const stripe = useStripe()
  const [nodata, setNodata] = useState()
  const [isdata, setIsdata] = useState(false)

  const checkoutNft = useSelector(state => state.Cart)
  checkoutNft.sort((a, b) => a.title.localeCompare(b.title))

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

  const iframeStyles = {
    base: {
      iconColor: '#c4f0ff',
      color: '#fff',
      fontWeight: '500',
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '30px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883'
      },
      '::placeholder': {
        color: '#87BBFD'
      }

      // backgroundColor: 'rgba(0,0,0,0.5);'
    },
    invalid: {
      iconColor: '#FFC7EE',
      color: '#FFC7EE'
    }
  }

  const cardElementOpts = {
    iconStyle: 'solid',
    style: iframeStyles,
    hidePostalCode: false
  }

  return (
    <motion.div
    className={'w-full xl:max-w-screen-xl flex flex-column justify-center'}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >

    <div className={'flex flex-col basis-5/12 justify-self-center bg-neutral-900 rounded-lg'}>

      <div className=''>
        <div className='w-full text-center'>
          <h1 className='text-4xl text-amber-600'>Confirm Payment</h1>
        </div>

        <div className={`${style.limitH} p-4 w-full object-contain overflow-scroll overflow-x-hidden flex flex-col`}>

        <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {checkoutNft.map((e) => (
                              <li key={e.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border bg-pink-500 opacity-100 border-gray-200">
                                  <img
                                    src={e.image}
                                    alt={e.title}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3 className='w-5/12 text-white'>{e.title}</h3>
                                      <p className="ml-4 text-amber-600">ETH {e.price}</p>
                                    </div>

                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">

                                    <div className="flex">
                                      {/* <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                        onClick={() => handleRemove(e.id)}
                                      >

                                      </button> */}
                                      <FaTrashAlt
                                      type="button"
                                      className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer "
                                      onClick={ '' }
                                        />

                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                          {/* {popModal && <Modal id={idDelete.current} pop={ setPopModal} />} */}
                        </div>
                      </div>

       </div>
      </div>
      <form className='mt-8 p-4' onSubmit={handleSubmit}>

        <CardElement className='text-xl' options={cardElementOpts}/>
        <button className='bg-green-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded-full w-full'>
          PAY
        </button>
      </form>
      {isdata && <h1 className='text-zinc-100 text-5xl'>PAGO REALIZADO CON EXITO</h1> }
      {nodata && <h2 className='text-red-100 text-5xl' > PROCESANDO PAGO...</h2>}
    </div>
  </motion.div>

  )
}

const Checkout = () => {
  return (
    <div className={style.div}>

        <Elements stripe={stripePromise} >
          <Checkoutform />
        </Elements>

      </div>
  )
}

export default Checkout
