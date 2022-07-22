import React from 'react'
import Classes from '../SearchBar/searchbar.module.css'
import { useDispatch, useSelector } from 'react-redux'
// import { orderNFTS } from '../../../Redux/Actions/ActionsSort'
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi'
import { setSort } from '../../../Redux/Actions/index'

export default function FilterSortBar () {
  const dispatch = useDispatch()
  const { filterBar } = useSelector(state => state)
  const { order } = useSelector(state => state.filter)

  const onChangeHandlerSort = (e) => {
    e.preventDefault()
    dispatch(setSort(e.target.value))
  }

  // filter: {
  //   price: null,
  //   title: null,
  //   categoryId: null,
  //   isActive: null,
  //   userId: null
  // }

  return (
    <div className={Classes.container3}>

      <select className={Classes.selector} value={order} name="Order" id="Order" onChange={(e) => {
        onChangeHandlerSort(e)
      }}
      >
        <optgroup className={Classes.group} label="Reset">
          <option value="id_ASC">Order by (Default)</option>
        </optgroup>
        <optgroup className={Classes.group} label="Name">
          <option value="title_ASC">Ascending (A-Z) ↑</option>
          <option value="title_DESC">Descending (Z-A) ↓</option>
        </optgroup>
        <optgroup className={Classes.group} label="Price">
          <option value="price_ASC">From Lower-Higher ↑</option>
          <option value="price_DESC">From Higher-Lower ↓</option>
        </optgroup>
      </select>
    </div>
  )
}
