import React, { useState } from 'react'
import Classes from './searchbar.module.css'
import { BiArrowFromRight, BiRefresh, BiSearch } from 'react-icons/bi'
export default function SearchBar () {
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch()
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
