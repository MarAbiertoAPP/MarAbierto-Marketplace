import React from 'react'
import { setPage } from '../../../Redux/Actions'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineRight, AiOutlineLeft, AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'

export default function Pagination () {
  const dispatch = useDispatch()
  const page = useSelector(state => state.page)

  const handleClick = (e) => {
    e.preventDefault()
    if (e.target.value === 'firstPage') dispatch(setPage(0))
    if (e.target.value === 'prevPage') dispatch(setPage(page.current !== 0 ? page.current - 1 : page.current))
    if (e.target.value === 'nextPage') dispatch(setPage(page.current !== page.max ? page.current + 1 : page.max))
    if (e.target.value === 'lastPage') dispatch(setPage(page.max))
  }
  return (
    <form className="text-gray-300 flex items-center space-x-1 justify-center mb-6" onClick={(e) => handleClick(e)}>
    <button value={'firstPage'} className="h-8 w-8 p-0 hover:bg-gray-700 rounded page-control text-4xl">
      <AiOutlineDoubleLeft className='pointer-events-none'/>
    </button>
    <button value={'prevPage'} className="h-8 w-8 p-0 hover:bg-gray-700 rounded page-control text-4xl">
      <AiOutlineLeft className='pointer-events-none'/>
    </button>
    <div className="space-x-1">
        <span className=" px-2 rounded page-item text-lg">Showing {page.current + 1} of {page.max ? page.max + 1 : 1}</span>
    </div>
    <button value={'nextPage'} className="h-8 w-8 p-0 hover:bg-gray-700 rounded page-control text-4xl">
     <AiOutlineRight className='pointer-events-none'/>
    </button>
    <button value={'lastPage'} className="h-8 w-8 p-0 hover:bg-gray-700 rounded page-control text-4xl">
      <AiOutlineDoubleRight className='pointer-events-none'/>
    </button>
    </form>
  )
}
