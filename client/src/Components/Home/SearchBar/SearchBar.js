import React, { useState } from 'react'
import Classes from './searchbar.module.css'
import { BiRefresh, BiSearch } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { filterByTitle, getAllNFT } from '../../../Redux/Actions'
import FilterSortBar from '../FilterSortBar/FilterSortBar'

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

  // filter: {
  //   price: null,
  //   title: null,
  //   categoryId: null,
  //   isActive: null,
  //   userId: null
  // }

  return (
    <div>
      <div className={Classes.container1}>
        <button className={Classes.button} onClick={() => dispatch(getAllNFT(1, 8))}><BiRefresh/>Refresh</button>
        <form className={Classes.container2} onSubmit={(e) => {
          handleSubmit(e)
        }}>
          <BiSearch className={Classes.button1}/>
          <input className={Classes.input}
                 name={'search'}
                 value={search}
                 onChange={(e) => {
                   handleChange(e)
                 }}
                 type={'search'}
                 placeholder={'Search something!'}
          />
        </form>
      </div>
      <div>
        <FilterSortBar/>
      </div>
    </div>

  )
}
