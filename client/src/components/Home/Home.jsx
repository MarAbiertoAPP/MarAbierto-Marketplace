import React from 'react'
import Classes from './home.module.css'
import SearchBar from './SearchBar/SearchBar'
export default function Home () {
  return (
        <div className={Classes.bg}>
            <SearchBar/>
        </div>
  )
}
