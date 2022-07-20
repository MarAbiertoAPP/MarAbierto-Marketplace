import React, { useState } from 'react'
import Classes from './searchbar.module.css'
import { BiArrowFromRight, BiRefresh, BiSearch } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { filterByTitle, getAllNFT } from '../../../Redux/Actions'
import { orderNFTS } from '../../../Redux/Actions/ActionsSort'

export default function SearchBar () {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const onChangeHandlerSort = (e) => {
    e.preventDefault()
    dispatch(orderNFTS(e.target.value))
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

            <select className={Classes.selector} name="Order" id="Order"
              onChange={(e) => {
                onChangeHandlerSort(e)
              }}
      >
        <optgroup className={Classes.group} label="Reset">
          <option value={'Default'}>Order by (Default)</option>
        </optgroup>
        <optgroup className={Classes.group} label="Name">
          <option value="ascName">Ascending (A-Z) ↑</option>
          <option value="descName">Descending (Z-A) ↓</option>
        </optgroup>
        <optgroup className={Classes.group} label="Price">
          <option value="ascPrice">From Lower-Higher ↑</option>
          <option value="descPrice">From Higher-Lower ↓</option>
        </optgroup>
      </select>

    </div>
  )
}
