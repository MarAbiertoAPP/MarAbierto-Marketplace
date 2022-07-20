import React from 'react'
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
    <div>
        <button value={'firstPage'} onClick={(e) => handleClick(e)}>FisrtPage</button>
        <button value={'prevPage'} onClick={(e) => handleClick(e)}>PrevPage</button>
        <button value={'nextPage'} onClick={(e) => handleClick(e)}>NextPage</button>
        <button value={'lastPage'}onClick={(e) => handleClick(e)}>LastPage</button>
    </div>
  )
}
