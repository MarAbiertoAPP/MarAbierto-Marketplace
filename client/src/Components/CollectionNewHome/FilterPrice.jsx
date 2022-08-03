import React, { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'
import { filterPriceCollec } from '../../Redux/Actions'

export default function FilterPrice () {
  const [input, setInput] = useState({
    min: '',
    max: ''
  })
  const [error, setError] = useState({
    min: '',
    max: '',
    isOkay: false
  })
  const dispatch = useDispatch()

  const handleChangeNumber = (e) => {
    const inputText = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')

    if (Number(inputText) < 1000) {
      setInput({
        ...input,
        [e.target.id]: inputText
      })
      setError(validation({
        ...input,
        [e.target.id]: inputText
      }))
    }
  }

  const validation = (input) => {
    const error = {}
    error.isOkay = true

    if (input.min !== '' && input.max !== '' && (input.max < input.min)) {
      error.max = 'Minimum must be less than maximum'
      error.isOkay = false
    }
    if (!input.min && !input.max) {
      error.isOkay = false
    }
    return error
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(filterPriceCollec(Number(input.min), Number(input.max)))
    setInput({
      min: '',
      max: ''
    })
    setError({
      min: '',
      max: '',
      isOkay: false
    })
  }

  return (
    <form className="hidden lg:block w-60" onSubmit={(e) => handleSubmit(e)}>
      <Disclosure as="div" key={'Category'} className=" py-4">
        {({ open }) => (
          <>
            <h3 className="-my-3 flow-root">
              <Disclosure.Button
                className="py-3 text-lg rounded-md w-full flex items-center justify-between  text-white hover:text-white">
                <span className="font-bold text-white ">Price</span>
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
            <Disclosure.Panel className="pt-4">
              <div className="space-y-4">
                <div className="flex flex-col text-white">
                  <div className='flex justify-center w-full mr-2 items-center'>
                    <input type="text" className='w-20 text-center bg-transparent border border-solid border-slate-400 rounded-lg p-1' placeholder='min' id='min' onChange={(e) => handleChangeNumber(e)} value={input.min} autoComplete='off' />
                    <span className='ml-4 mr-4'> to </span>
                    <input type="text" className='w-20 text-center bg-transparent border border-solid border-slate-400 rounded-lg p-1' placeholder='max' id='max' onChange={(e) => handleChangeNumber(e)} value={input.max} autoComplete='off' />
                  </div>
                  <div className='text-rose-500 text-sm text-center w-full'>
                    {error.max && <span>{error.max}</span>}
                  </div>
                  <div className='flex justify-center w-full mr-2'>
                    <button className='w-11/12 bg-purple-600/[.6] hover:bg-purple-600 p-2 mt-4 rounded-lg disabled:bg-purple-300/[0.2] disabled:hover:bg-purple-300/[0.2]' disabled={!error.isOkay}>
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </form>
  )
}
