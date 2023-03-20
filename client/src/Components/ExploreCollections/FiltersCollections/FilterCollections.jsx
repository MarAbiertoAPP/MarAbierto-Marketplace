import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { filterCollecByCategory, getAllCategories, setPageCollec } from '../../../Redux/Actions'
import { useTranslation } from 'react-i18next'

function FilterCollections () {
  const [t] = useTranslation('faq')
  const dispatch = useDispatch()
  const location = useLocation()
  const { categoryName } = useSelector(state => state.filterCollec)
  const allCategories = useSelector(state => state.categories)
  const [checkedState, setCheckedState] = useState(
    new Array(1).fill(false)
  )
  const [checked, setChecked] = useState([])
  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch])

  const handleClick = (e) => {
    const { value } = e.target
    console.log(value)
    if (e.target.checked) {
      setChecked([value])
      if ([value].length > 0) {
        dispatch(filterCollecByCategory([value].join('_')))
      }
    }
    if (!e.target.checked) {
      setChecked([...checked.filter(c => c !== value)])
      if ([...checked.filter(c => c !== value)].length > 0) {
        dispatch(filterCollecByCategory([...checked.filter(c => c !== value)].join('_')))
      }
      if ([...checked.filter(c => c !== value)].length === 0) {
        dispatch(filterCollecByCategory(null))
      }
    }
    dispatch(setPageCollec(1))
  }

  function handleSelectChanges (e) {
    e.preventDefault()
    console.log(e.target.value)
    setChecked([e.target.value])
    if ([e.target.value].length > 0) {
      dispatch(filterCollecByCategory([e.target.value].join('_')))
    }
    dispatch(setPageCollec(1))
  }

  useEffect(() => {
    if (categoryName === null) {
      setCheckedState([...checkedState].fill(false))
      setChecked([])
    }
    if (categoryName) {
      const arrCheckedBoxes = categoryName.split('_')
      const newState = [...checkedState].fill(false)
      for (const id of arrCheckedBoxes) {
        const category = allCategories.find(c => c.id === id)
        const indexCategory = allCategories.indexOf(category)
        newState[indexCategory] = true
      }
      setCheckedState(newState)
    }
  }, [categoryName])

  useEffect(() => {
    const stateFromRedux = urlToState(location.search)
    const arrCategoriesFromRedux = stateFromRedux?.categoryName ? stateFromRedux.categoryName.split('_') : []
    setChecked(arrCategoriesFromRedux || [])
    const newState = [...checkedState].fill(false)
    for (const id of arrCategoriesFromRedux) {
      const category = allCategories.find(c => c.name === id)
      const indexCategory = allCategories.indexOf(category)
      newState[indexCategory] = true
    }
    setCheckedState(newState)
  }, [allCategories])

  const urlToState = (url) => {
    if (url === '') return
    const arrQuerys = url.slice(1).split('&')
    const newState = {}
    const numbersKeys = ['page', 'max', 'cardsPerPage']
    for (const query of arrQuerys) {
      const key = query.split('=')[0]
      const value = query.split('=')[1]
      if (numbersKeys.includes(key)) {
        newState[key] = Number(value)
      } else {
        newState[key] = value
      }
    }
    return newState
  }

  return (
    <div className='w-full'>

      <div className='hidden xl:flex w-full text-lime-600 flex space-x-10 mt-8'>
           <button onClick={handleClick} value='All' checked={!!checkedState} className='text-md text-white font-semibold  underline underline-offset-4 decoration-transparent decoration-solid hover:decoration-current capitalize'>All</button>
      {allCategories?.map(e => {
        return <button key={e.id} value={e.name} checked={!!checkedState} id={e.id} onClick={handleClick} className='text-md text-white font-semibold  underline underline-offset-4 decoration-transparent decoration-solid hover:decoration-current capitalize'>{t(`${e.name}.${e.name}`)}</button>
      })}
      </div>
      <div className='w-full flex justify-center text-center xl:hidden'>

      <select onChange={e => handleSelectChanges(e)} className='w-8/12 text-center h-8 rounded-lg bg-transparent text-neutral-300 border-2 border-purple-700 outline-none'>
        <option value='All' checked={!!checkedState} className='bg-gray-900 text-purple-700 py-4'>All</option>
        {allCategories?.map(e => {
          return <option key={e.id} value={e.name} id={e.id} className='bg-gray-900 text-purple-700 py-4 capitalize'>{t(`${e.name}.${e.name}`)}</option>
        })}

      </select>
      </div>

    </div>
  )
}

export default FilterCollections
