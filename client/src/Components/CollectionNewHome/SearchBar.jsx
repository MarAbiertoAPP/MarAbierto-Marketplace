import React, { useState } from 'react'
import { filterTitleCollec, resetFilters, setPage } from '../../Redux/Actions/index'
import { BiRefresh, BiSearch } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import s from './searchbar.module.css'

export default function SearchBar () {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const inputText = e.target.value.replace(/[^a-z\s#0-9]/gi, '')
    if (inputText.length < 50) {
      setSearch(inputText)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(resetFilters())
    if (!search.trim().length) {
      dispatch(filterTitleCollec(null))
    } else {
      dispatch(filterTitleCollec(search.trim()))
    }
    dispatch(setPage(1))
    setSearch('')
  }

  const handleReset = (e) => {
    e.preventDefault()
    dispatch(resetFilters())
    dispatch(setPage(1))
  }

  return (
    <div className='flex justify-start align-middle'>
      <form className='flex align-middle focus:border-solid focus:border-b focus:border-b-white' onSubmit={(e) => { handleSubmit(e) }}>
        <input className={`${s.input} bg-transparent outline-none text-white pl-2 pr-2`}
          name={'search'}
          value={search}
          onChange={(e) => { handleChange(e) }}
          type={'search'}
          placeholder={'Search NFTs!'}
        />
        <div className='flex justify-center w-8 h-8 items-center text-center text-white rounded-full bg-purple-600/[.5] hover:bg-purple-600'>
          <button type={'submit'}><BiSearch className='text-xl'/></button>
        </div >
      </form>
      <div className='flex justify-center w-8 h-8 items-center text-center text-white rounded-full bg-purple-600/[.5] hover:bg-purple-600 ml-2'>
        <button onClick={(e) => handleReset(e)}><BiRefresh className='text-2xl' /></button>
      </div >
    </div>
  )
}
