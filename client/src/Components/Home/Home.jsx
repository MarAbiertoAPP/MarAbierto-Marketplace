import React, { useEffect, useState } from 'react'
import Classes from './home.module.css'
import data from './monigotes/nft'
import Card from '../UI/Card/Card'
import SearchBar from './SearchBar/SearchBar'
import Nav from '../UI/Nav/Navigation'
import { useSelector, useDispatch } from 'react-redux'
import { setPageMax } from '../../Redux/Actions'
import axios from 'axios'
import Pagination from './Pagination/Pagination'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'

export default function Home () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filterConfig = useSelector(state => state.filter)
  const page = useSelector(state => state.page)
  const dispatch = useDispatch()
  const [dataAPI, setDataAPI] = useState({})
  const navigate = useNavigate()

  const setVariables = (data) => {
    setDataAPI(data)
    dispatch(setPageMax(data.totalPage))
    console.log(data)
  }
  useEffect(() => {
    console.log(filterConfig)
    axios.post(`/stores/nft?offset=${page.current || 0}`, filterConfig)
      .then(response => setVariables(response.data))
  }, [filterConfig, page.current])

  useEffect(() => {
    let url = 'home/?'
    for (const key in filterConfig) {
      if (filterConfig[key]) {
        url += `${key}=${filterConfig[key]}&`
      }
    }
    for (const q in page) {
      if (q === 'current' && page[q] !== 0) url += `offset=${page[q]}&`
      if (q === 'cardsPerPage' && page[q] !== 10) url += `limit=${page[q]}&`
    }
    url = url.slice(0, -1)
    console.log(url)
    if (url !== 'home/?') {
      navigate(`/${url}`, { push: true })
    }
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
    </div>
  )
}
