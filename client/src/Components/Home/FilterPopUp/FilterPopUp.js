import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { HiChevronDown } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories, filterByCategory, filterByPrice, setPage } from '../../../Redux/Actions'
import Classes from '../FilterPopUp/filterpopup.module.css'

export default function FilterPopUp () {
  // filter: {
  //   price: null,
  //   title: null,
  //   categoryId: null,
  //   isActive: null,
  //   userId: null
  // }
  const dispatch = useDispatch()
  const category = useSelector(state => state.categories)

  useEffect(() => {
    dispatch(getAllCategories())
  }, [])

  const [open, setOpen] = useState(false)

  const [input, setInput] = useState({
    category: [],
    priceMin: null,
    priceMax: null
  })

  const showDropdown = () => {
    setOpen(!open)
  }

  const handleOnChange = (e) => {
    if (e.target.checked) {
      setInput({
        ...input,
        category: [...input.category, e.target.value]
      })
    } else {
      setInput({
        ...input,
        category: input.category.filter((t) => t !== e.target.value)
      })
    }
  }

  const handlePrice = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.category[0]) dispatch(filterByCategory(null))
    if (input.category[0]) dispatch(filterByCategory(input.category.join('_')))
    if (input.priceMin || input.priceMax) dispatch(filterByPrice(input.priceMin, input.priceMax))
    dispatch(setPage(0))
  }

  return (
    <div className={Classes.container}>
      <h1>ITS TIME TO FILTER!</h1>
      <label>Price
        <input className={'w-40 h-6 mx-3 text-black text-end outline-none appearance-none'} type={'number'} min={0} max={9999} value={input.priceMin} id='priceMin' onChange={(e) => handlePrice(e)} placeholder={'Min'}/>
        -
        <input className={'w-40 h-6 mx-3 text-black text-end outline-none appearance-none'} type={'number'} min={0} max={9999} value={input.priceMax} id='priceMax' onChange={(e) => handlePrice(e)} placeholder={'Max'}/>
      </label>
      <div>
      <label>Categories</label>
      <button onClick={showDropdown}>
      <IconContext.Provider value={{ className: `${Classes.dots}` }}>
            <HiChevronDown />
          </IconContext.Provider>
        </button>
      </div>
        <form onChange= {(e) => handleOnChange(e)} className={'text-sm flex flex-col'}>
          {open
            ? category.map((e, index) => <label key={index}><input type='checkbox' value={e.id} id='category'/> {e.name}</label>)
            : null
          }
        </form>
          <label>Active?:
        <input type={'checkbox'}/>
      </label>
      <button className={Classes.button} type={'submit'} onClick={(e) => handleSubmit(e)}> Lets Go!</button>
    </div>
  )
}
