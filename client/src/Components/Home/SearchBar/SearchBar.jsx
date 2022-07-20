import React, { useState } from 'react'
import Classes from './searchbar.module.css'
import { BiArrowFromRight, BiRefresh, BiSearch } from 'react-icons/bi'
import { filterByTitle } from '../../../Redux/Actions/index'
import { useDispatch } from 'react-redux'

export default function SearchBar () {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(filterByTitle(search))
    setSearch('')
  }

  return (
    <div className={Classes.container1}>
      <button className={Classes.button}><BiArrowFromRight/>Filters</button>
      <button className={Classes.button}><BiRefresh/>Refresh</button>
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
  )
}
