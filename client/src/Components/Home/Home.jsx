import React, { /* useEffect, */ } from 'react'
import Classes from './home.module.css'
import data from './monigotes/nft'
import Card from '../UI/Card/Card'
/* import SearchBar from './SearchBar/SearchBar' */
import Nav from '../UI/Nav/Navigation'
import Filters from './Filters/Filters'

export default function Home () {
  return (
    <div className={Classes.bg}>
      <Nav/>
{/*       <SearchBar/> */}
      <div className={Classes.noTeMoves}>
      </div>
      <Filters>
      <div className={`${Classes.main} place-content-center`}>
        {data && data.map(item => <Card key={item.title} title={item.title} image={item.img} price={item.price}/>)}
      </div>
      </Filters>
    </div>
  )
}
