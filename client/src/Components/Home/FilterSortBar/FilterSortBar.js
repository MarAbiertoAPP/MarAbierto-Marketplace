import React from 'react'
import Classes from '../SearchBar/searchbar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { orderNFTS } from '../../../Redux/Actions/ActionsSort'
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi'
import { showFilterBar } from '../../../Redux/Actions/ActionsFilterBar'

export default function FilterSortBar () {
  const dispatch = useDispatch()
  const { filterBar } = useSelector(state => state)

  const onChangeHandlerSort = (e) => {
    e.preventDefault()
    dispatch(orderNFTS(e.target.value))
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
      {!filterBar &&
        <button className={Classes.button} onClick={() => dispatch(showFilterBar())}>Filters<BiArrowToRight/></button>
      }
      {filterBar &&
        <button className={Classes.button2} onClick={() => dispatch(showFilterBar())}>Filters<BiArrowToLeft/></button>
      }
      <select className={Classes.selector} name="Order" id="Order" onChange={(e) => {
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
