import React, { useState } from 'react'
import Classes from './searchbar.module.css'
import { filterByTitle, resetFilters, setPage } from '../../../Redux/Actions/index'
import { BiRefresh, BiSearch } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'

export default function SearchBar () {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const filterShow = useSelector(state => state.filterBar)

  /*   const handleChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  } */

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
      dispatch(filterByTitle(null))
    } else {
      dispatch(filterByTitle(search.trim()))
    }
    dispatch(setPage(0))
    setSearch('')
    console.log(filterShow)
  }

  const handleReset = (e) => {
    e.preventDefault()
    dispatch(resetFilters())
    dispatch(setPage(0))
  }

  return (
    <div>
    <div className={Classes.container1}>
    <button className={Classes.button} onClick={(e) => handleReset(e)}><BiRefresh/></button>
    <form className={Classes.container2} onSubmit={(e) => { handleSubmit(e) }}>
      <input className={Classes.input}
             name={'search'}
             value={search}
             onChange={(e) => { handleChange(e) }}
             type={'search'}
             placeholder={'Search NFTs!'}
      />
      <button className={Classes.button} type={'submit'}><BiSearch/>Search!</button>
    </form>
    </div>
    </div>

  )
}
