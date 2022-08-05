
/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
// import { removeFromCart } from '../../Redux/Actions/ActionsCart'
import { FaTrashAlt } from 'react-icons/fa'
import Modal from '../ModalDelete/ModalDeleteFromCart'
import { Link } from 'react-router-dom'
import { getEthereumConv } from '../../Redux/Actions/Convertion'
import { cleanAllCart } from '../../Redux/Actions/ActionsCart'

export function Cart ({ open, setOpen }) {
  const dispatch = useDispatch()
  const ethereumValue = useSelector(state => state.Conv.ethereum)

  const ethValue = ethereumValue?.usd
  const cartToBuy = useSelector(state => state.Cart)
  Cart.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func
  }
  const handleCleanCart = () => {
    dispatch(cleanAllCart())
  }
  useEffect(() => {
    dispatch(getEthereumConv())
    localStorage.setItem('Cart', JSON.stringify(cartToBuy))
  }, [cartToBuy])

  let totalBuy = 0
  // const total = Number(totalBuy.toFixed(4))
  cartToBuy.map(item => {
    totalBuy = totalBuy + Number(item.price.toFixed(3))
    return totalBuy
  }

  )

  const [popModal, setPopModal] = useState(false)

  const handleDelete = (e) => {
    setPopModal(true)
    idDelete.current = e
  }
  const idDelete = useRef()

  return (

    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="absolute z-20" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-800 bg-opacity-70 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md  bg-white ">
                  <div className="flex h-full flex-col overflow-y-scroll   shadow-xl  bg-gradient-to-b from-violet-900 via-indigo-800 to-purple-400 ">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-xl text-orange-400 font-bold capitalize"> Shopping cart </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cartToBuy.map((e) => (
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
                                      <h3>
                                      </h3>
                                      <p className="ml-4 text-orange-200 text-lg">ETH {e.price}</p>
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
                                      className="font-medium text-lime-500 hover:text-indigo-500 cursor-pointer "
                                      onClick={ () => handleDelete(e.id)

                                      }
                                        />

                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                          {popModal && <Modal id={idDelete.current} pop={ setPopModal} />}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium">
                        <p className='text-gray-900 font-bold'>Subtotal</p>
                        <p className='text-gray-900 font-bold'>ETH {totalBuy.toFixed(3)}</p>
                        <p className='text-gray-900 font-bold'>USD {((ethValue || '') * totalBuy).toFixed(2) }</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-700">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6 flex justify-between">
                        <Link to={'/checkout'}>
                          <button disabled={cartToBuy.length === 0} className='bg-blue-500 enabled:hover:bg-blue-700 disabled:opacity-75 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded'> CHECKOUT</button>
                      </Link>
                      <button disabled={cartToBuy.length === 0} onClick={handleCleanCart} className='bg-red-500 enabled:hover:bg-red-700 disabled:opacity-75 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded'>CLEAN CART</button>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-700">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-bold text-violet-600 hover:text-violet-900"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping<span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
