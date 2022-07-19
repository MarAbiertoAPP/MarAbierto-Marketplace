import React, { useEffect } from 'react'
import Classes from './home.module.css'
import data from './monigotes/nft'
import Card from '../UI/Card/Card'
import SearchBar from './SearchBar/SearchBar'
import Nav from '../UI/Nav/Navigation'

export default function Home () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={Classes.bg}>
      <Nav/>
      <SearchBar/>
      <div className={`${Classes.main} place-items-center`}>
        {data && data.map(item => <Card key={item.title} title={item.title} image={item.img} price={item.price}/>)}
      </div>

    </div>
  )
}
