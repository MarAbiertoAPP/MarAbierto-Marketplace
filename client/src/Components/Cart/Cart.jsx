
/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineClose } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
// import { removeFromCart } from '../../Redux/Actions/ActionsCart'
import { FaTrashAlt } from 'react-icons/fa'
import Modal from '../ModalDelete/ModalDeleteFromCart'
import { Link } from 'react-router-dom'

export function Cart ({ open, setOpen }) {
  const cartToBuy = useSelector(state => state.Cart)
  Cart.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func
  }

  useEffect(() => {
    localStorage.setItem('Cart', JSON.stringify(cartToBuy))
  }, [cartToBuy])

  let totalBuy = 0
  cartToBuy.map(item => {
    totalBuy = totalBuy + item.price
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
                  <div className="flex h-full flex-col overflow-y-scroll   shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium  text-indigo-600"> Shopping cart </Dialog.Title>
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
                                      <p className="ml-4 text-orange-600">ETH {e.price}</p>
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
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p className='text-orange-600'>Subtotal</p>
                        <p className='text-orange-600'>ETH {totalBuy}</p>
                        <p className='text-orange-600'>USD {totalBuy * 1500}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <Link to={'/checkout'}>
                          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> CHECKOUT</button>

                      </Link>

                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
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
