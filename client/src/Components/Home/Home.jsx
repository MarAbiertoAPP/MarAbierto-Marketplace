import React, { useEffect, useState } from 'react'
import Classes from './home.module.css'
import data from './monigotes/nft'
import Card from '../UI/Card/Card'
import SearchBar from './SearchBar/SearchBar'
import Nav from '../UI/Nav/Navigation'
import { useSelector } from 'react-redux'
import FilterPopUp from './FilterPopUp/FilterPopUp'
import { useSelector, useDispatch } from 'react-redux'
import { setPageMax } from '../../Redux/Actions'
import axios from 'axios'
import Pagination from './Pagination/Pagination'
import Footer from '../Footer/Footer'

export default function Home () {
  const { filterBar } = useSelector(state => state)

  useEffect(() => {
    console.log(filterBar)
    window.scrollTo(0, 0)
  }, [])

  const filterConfig = useSelector(state => state.filter)
  const page = useSelector(state => state.page)
  const dispatch = useDispatch()
  const [dataAPI, setDataAPI] = useState({})

  useEffect(() => {
    console.log(filterConfig)
    axios.post(`/stores/nft?offset=${page.current || 0}`, filterConfig)
      .then(response => setDataAPI(response.data))
      .then(response => dispatch(setPageMax(dataAPI.totalPage)))
  }, [filterConfig, page.current])

  return (
    <div className={Classes.bg}>
      <Nav/>
      <SearchBar/>
      {
        console.log(dataAPI.nft)
      }
      <div className={`${Classes.main} place-items-center`}>
        {data && dataAPI.nft?.map(item => <Card key={item.title} title={item.title} image={item.path} price={item.price}/>)}
      </div>
      <Pagination />
<Footer/>
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
