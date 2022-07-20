import React from 'react'
import Classes from './Pagination.module.css'
import { setPage } from '../../../Redux/Actions'
import { useSelector, useDispatch } from 'react-redux'

export default function Pagination () {
  const dispatch = useDispatch()
  const page = useSelector(state => state.page)

  const handleClick = (e) => {
    if (e.target.value === 'firstPage') dispatch(setPage(0))
    if (e.target.value === 'prevPage') dispatch(setPage(page.current !== 0 ? page.current - 1 : page.current))
    if (e.target.value === 'nextPage') dispatch(setPage(page.current !== page.max ? page.current + 1 : page.max))
    if (e.target.value === 'lastPage') dispatch(setPage(page.max))
  }

  return (
    <div className={Classes.container}>
        <button className='m-5' value={'firstPage'} onClick={(e) => handleClick(e)}>FIRST PAGE</button>
        <button className='m-5' value={'prevPage'} onClick={(e) => handleClick(e)}>PREV PAGE</button>
        <button className='m-5' value={'nextPage'} onClick={(e) => handleClick(e)}>NEXT PAGE</button>
        <button className='m-5' value={'lastPage'} onClick={(e) => handleClick(e)}>LAST PAGE</button>
    </div>
  )
}
