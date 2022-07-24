import React, { /* useEffect, */ Fragment, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { filterByCategory, setPage, setSort } from '../../../Redux/Actions'
import { XIcon } from '@heroicons/react/outline'
import { /* ChevronDownIcon, */ FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

/* import Classes from '../SearchBar/searchbar.module.css'
 */
/* const sortOptions = [
  { name: 'Ascending (A-Z) ↑', href: '#', current: true },
  { name: 'Descending (Z-A) ↓', href: '#', current: false },
  { name: 'From Lower-Higher ↑', href: '#', current: false },
  { name: 'From Higher-Lower ↓', href: '#', current: false }
] */

/* const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false }
    ]
  }
] */

/* function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
} */

export default function Filters ({ children }) {
  Filters.propTypes = {
    children: PropTypes.node
  }

  // Data cycle
  // User click checkedBox -> set(intermediateState(checked)) -> set Reducer state: categoryId
  // -> ComponentDidUpdate(reduxState) -> set(checkedStates)

  const dispatch = useDispatch()
  const location = useLocation()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const { order, categoryId } = useSelector(state => state.filter)
  const categories = useSelector(state => state.categories)

  // Local state that consume from redux to set if a checkbox if checked
  const [checkedState, setCheckedState] = useState(
    new Array(9).fill(false)
  )

  // Local state to control checkbox checked
  // The render has to be from redux not the localState
  const [checked, setChecked] = useState([])


  // Handle to set the checked state and set the state in redux
  const handleOnChange = (e) => {
    const { value } = e.target
    if (e.target.checked) {
      setChecked([...checked, value])
      if ([...checked, value].length > 0) {
        dispatch(filterByCategory([...checked, value].join('_')))
      }
    }
    if (!e.target.checked) {
      setChecked([...checked.filter(c => c !== value)])
      if ([...checked.filter(c => c !== value)].length > 0) {
        dispatch(filterByCategory([...checked.filter(c => c !== value)].join('_')))

      }
      if ([...checked.filter(c => c !== value)].length === 0) {
        dispatch(filterByCategory(null))
      }
    }
    dispatch(setPage(1))
  }

  // Component update when the redux state change and set the local state that control the checked
  useEffect(() => {
    if (categoryId === null) {
      setCheckedState([...checkedState].fill(false))
      setChecked([])
    }
    if (categoryId) {
      const arrCheckedBoxes = categoryId.split('_')
      const newState = [...checkedState].fill(false)
      for (const id of arrCheckedBoxes) {
        const category = categories.find(c => c.id === id)
        const indexCategory = categories.indexOf(category)
        newState[indexCategory] = true
      }
      setCheckedState(newState)
    }
  }, [categoryId])

  // When page is refresh set the values of the checked boxes we have to use LocalStorage
  useEffect(() => {
    const stateFromRedux = urlToState(location.search)
    const arrCategoriesFromRedux = stateFromRedux?.categoryId ? stateFromRedux.categoryId.split('_') : []
    setChecked(arrCategoriesFromRedux || [])
    const newState = [...checkedState].fill(false)
    for (const id of arrCategoriesFromRedux) {
      const category = categories.find(c => c.id === id)
      const indexCategory = categories.indexOf(category)
      newState[indexCategory] = true
    }
    setCheckedState(newState)
  }, [categories])

  const urlToState = (url) => {
    if (url === '') return
    const arrQuerys = url.slice(1).split('&')
    const newState = {}
    const numbersKeys = ['page', 'max', 'cardsPerPage']
    for (const query of arrQuerys) {
      const key = query.split('=')[0]
      const value = query.split('=')[1]
      if (numbersKeys.includes(key)) {
        newState[key] = Number(value)
      } else {
        newState[key] = value
      }
    }
    return newState
  }

  // Handle to set the order value on redux
  const onChangeHandlerSort = (e) => {
    e.preventDefault()
    dispatch(setSort(e.target.value))

    dispatch(setPage(1))

  }

  return (
    <div>
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel
                  className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                  <div className="px-4 flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="font-medium text-gray-900 px-2 py-3">
                    </ul>
                    {/* ALGO A CAMBIAR CUANDO HAYA MAS TIPOS DE FILTRADOS ESTO ES PARA EL CELULAR */}
                    <Disclosure as="div" key={'Category'} className="border-t border-gray-200 px-4 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button
                              className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">Category</span>
                              <span className="ml-6 flex items-center">
                                {open
                                  ? (
                                    <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                    )
                                  : (
                                    <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                    )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {categories && categories.map((option, optionIdx) => (
                                <div key={option.id} className="flex items-center ">
                                  <input
                                    id={`Category-${option.id}`}
                                    value={option.id}
                                    type="checkbox"
                                    checked={!!checkedState[optionIdx]}
                                    onChange={(e) => handleOnChange(e)}
                                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                  />
                                  <label
                                    htmlFor={`Category-${option.id}`}
                                    className="ml-3 text-sm text-white cursor-pointer"
                                  >
                                    {option.name}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="w-full mx-auto mt-6 px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900"></h1>

            {/* Ordering div */}
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <select className={'font-medium bg-black text-white outline-none cursor-pointer'} value={order} name="Order" id="Order" onChange={(e) => {
                    onChangeHandlerSort(e)
                  }}>
                    <optgroup className={'text-gray-500 bg-slate-200'} label="Reset">
                      <option value="id_ASC" className={'text-gray-500 bg-white'}>Order by (Default)</option>
                    </optgroup>
                    <optgroup className={'text-gray-500 bg-slate-200'} label="Name">
                      <option value="title_ASC" className={'text-gray-500 bg-white'}>Ascending (A-Z) ↑</option>
                      <option value="title_DESC" className={'text-gray-500 bg-white'}>Descending (Z-A) ↓</option>
                    </optgroup>
                    <optgroup className={'text-gray-500 bg-slate-200'} label="Price">
                      <option value="price_ASC" className={'text-gray-500 bg-white'}>From Lower-Higher ↑</option>
                      <option value="price_DESC" className={'text-gray-500 bg-white'}>From Higher-Lower ↓</option>
                    </optgroup>
                  </select>
                </div>
              </Menu>

              <button type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500">
                <span className="sr-only">View grid</span>
                <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FilterIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Filters */}
              <div className='w-80'>
                <form className="hidden lg:block w-80" >
                  <h3 className="sr-only">Categories</h3>
                  <ul role="list" className="text-sm font-medium text-gray-900 space-y-4 pb-6  ">
                  </ul>
                  {/* ESTO TAMBIEN HAY QUE CAMBIAR SI VAMOS A COLOCAR MAS OPCIONES DE FILTRADO ESTO ESCRITORIO */}
                  <Disclosure as="div" key={'Category'} className=" py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button
                            className="py-3 text-lg rounded-md w-full flex items-center justify-between  text-white hover:text-white">
                            <span className="font-bold text-white ">Category</span>
                            <span className="ml-6 flex items-center">
                              {open
                                ? (
                                  <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                  )
                                : (
                                  <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {categories && categories.map((option, optionIdx) => (
                              <div key={option.id} className="flex items-center ">
                                <input
                                  id={`Category-${option.id}`}
                                  value={option.id}
                                  type="checkbox"
                                  checked={!!checkedState[optionIdx]}
                                  onChange={(e) => handleOnChange(e)}
                                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                />
                                <label
                                  htmlFor={`Category-${option.id}`}
                                  className="ml-3 text-sm text-white cursor-pointer"
                                >
                                  {option.name}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </form>
              </div>
              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* Replace with your content */}
                {children}
                {/* /End replace */}
              </div>
            </div>
          </section>
        </main>
      </div >
    </div >
  )
}
