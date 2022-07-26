import React from 'react'
import { useSelector } from 'react-redux'

export default function ItemsCart () {
  const checkoutNft = useSelector(state => state.Cart)
  checkoutNft.sort((a, b) => a.title.localeCompare(b.title))

  let totalBuy = 0
  checkoutNft.map(item => {
    totalBuy = totalBuy + item.price
    return totalBuy
  })

  return (
    <div>
      <div className=''>
        <div className='w-full text-center'>
          <h1 className='text-4xl text-amber-600'>Confirm Payment</h1>
        </div>

        <div className='p-4 w-full object-contain overflow-scroll overflow-x-hidden flex flex-col'>

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
      <div className='grid justify-end mr-4'>
        <p className='ml-4 text-amber-600 '>Total Price</p>
        <p className='ml-4 text-amber-600 '>ETH {totalBuy}</p>
        <p className='ml-4 text-amber-600 '>U$S {totalBuy * 1500}</p>
      </div>
    </div>
  )
}
