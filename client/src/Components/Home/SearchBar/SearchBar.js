import React, { useState } from 'react'
import Classes from './searchbar.module.css'
import { BiArrowFromRight, BiRefresh, BiSearch } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { filterByTitle, getAllNFT } from '../../../Redux/Actions'

export default function SearchBar () {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!search.length) {
      setSearch('')
      return alert('Please enter a search term')
    }

    if (search.match(/^[!@#$%?/><,.:;'"^&*()_=+]+$/)) {
      setSearch('')
      return alert('The search Term cant contain special characters')
    }

    dispatch(filterByTitle(search))
    setSearch('')
  }

  return (
    <div className={Classes.container1}>
      <button className={Classes.button}><BiArrowFromRight/>Filters</button>
      <button className={Classes.button} onClick={() => dispatch(getAllNFT())}><BiRefresh/>Refresh</button>
      <form className={Classes.container2} onSubmit={(e) => {
        handleSubmit(e)
      }}>
        <input className={Classes.input}
               name={'search'}
               value={search}
               onChange={(e) => {
                 handleChange(e)
               }}
               type={'search'}
               placeholder={'Search NFTs!'}
        />
        <button className={Classes.button} type={'submit'}><BiSearch/>Search!</button>
      </form>
    </div>
  )
}
