import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './Checkout.module.css'
import { cleanBuyNow } from '../../Redux/Actions/ActionsCart'

export default function ItemsCart () {
  const { BuyNow, Cart } = useSelector(state => state)
  const ethereumValue = useSelector(state => state.Conv.ethereum)
  const ethValue = ethereumValue?.usd
  const dispatch = useDispatch()

  let totalBuy = 0
  const checkoutNft = BuyNow.length ? BuyNow : Cart

  checkoutNft.map(item => {
    totalBuy = totalBuy + Number(item.price.toFixed(3))
    return totalBuy
  })

  useEffect(() => {
    return () => { dispatch(cleanBuyNow()) }
  }, [])

  checkoutNft.sort((a, b) => a.title.localeCompare(b.title))

  return (
    <div>
      <div className=''>
        <div className='w-full text-center'>
          <h1 className='text-5xl text-white mb-2'>Confirm Payment</h1>
        </div>

        <div
          className={`${style.scrollBar} xl:max-h-limitH p-4 w-full object-contain overflow-scroll overflow-x-hidden flex flex-col`}>

          <div className={'mt-8'}>
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {checkoutNft.map((e) => (
                  <li key={e.id} className="flex py-6">
                    <div
                      className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border bg-pink-500 opacity-100 border-gray-200">
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
                          {/* <div className='w-4/12 bg-white'>

                          </div> */}
                          <div className='text-center'>
                            <p className="text-white">{e.price}</p>
                            <p className="text-white">ETH</p>

                          </div>
                        </div>

                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex">

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
      <div className='grid justify-center mt-8 mr-4'>
        <p className='ml-4 text-white text-xl '>Total Price</p>
        <p className='ml-4 text-white text-xl '>ETH {totalBuy.toFixed(3)}</p>
        <p className='ml-4 text-white text-xl '>U$S {((ethValue || '') * totalBuy).toFixed(2) }</p>
      </div>
    </div>
  )
}
