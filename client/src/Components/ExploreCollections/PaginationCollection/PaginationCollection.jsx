import React from 'react'
import { setPageCollec } from '../../../Redux/Actions'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineRight, AiOutlineLeft, AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'

export default function Pagination () {
  const dispatch = useDispatch()
  const { page, max } = useSelector(state => state.filterCollec)
  console.log(max)

  const handleClick = (e) => {
    e.preventDefault()
    if (e.target.value === 'firstPage') dispatch(setPageCollec(1))
    if (e.target.value === 'prevPage') dispatch(setPageCollec(page !== 1 ? page - 1 : page))
    if (e.target.value === 'nextPage') dispatch(setPageCollec(page !== max ? page + 1 : max))
    if (e.target.value === 'lastPage') dispatch(setPageCollec(max))
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
        <span className=" px-2 rounded page-item text-lg">Showing {page} of {max || 1}</span>
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
