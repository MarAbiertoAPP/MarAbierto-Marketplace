import React from 'react'
import Classes from './home.module.css'
import data from './monigotes/nft'
import Card from '../UI/Card/Card'
import SearchBar from './SearchBar/SearchBar'
export default function Home () {
  console.log(data)
  return (
        <div className={Classes.bg}>
            <div className={`${Classes.main} grid grid-cols-5 gap-y-5  place-items-center`}>
                {data && data.map(item => <Card key={item.title} title={item.title} image={item.img} price={item.price} />)}
            </div>
            <SearchBar/>
        </div>
  )
}
