import React, { useEffect } from 'react'
import Classes from './home.module.css'
import data from './monigotes/nft'
import Card from '../UI/Card/Card'
import SearchBar from './SearchBar/SearchBar'
import Nav from '../UI/Nav/Navigation'
import { useSelector } from 'react-redux'
import FilterPopUp from './FilterPopUp/FilterPopUp'

export default function Home () {
  const { filterBar } = useSelector(state => state)

  useEffect(() => {
    console.log(filterBar)
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={Classes.bg}>
      <Nav/>
      <SearchBar/>
      {!filterBar &&
        <div>
        </div>
      }
      {filterBar &&
        <div className={''}>
          <FilterPopUp/>
        </div>
      }
       <div className={`${Classes.main} place-items-center`}>
        {data && data.map(item => <Card key={item.title} title={item.title} image={item.img} price={item.price}/>)}
       </div>
    </div>
  )
}
