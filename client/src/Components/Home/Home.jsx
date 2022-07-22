import React, { useEffect, useState } from 'react'
import Classes from './home.module.css'
import data from './monigotes/nft'
import Card from '../UI/Card/Card'
import SearchBar from './SearchBar/SearchBar'
import Nav from '../UI/Nav/Navigation'
import FilterPopUp from './FilterPopUp/FilterPopUp'
import { useSelector, useDispatch } from 'react-redux'
import { setPageMax, resetFilters } from '../../Redux/Actions'
import axios from 'axios'
import Pagination from './Pagination/Pagination'
import Footer from '../Footer/Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../Home/toast.css'

export default function Home () {
  const { filterBar } = useSelector(state => state)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filterConfig = useSelector(state => state.filter)
  const page = useSelector(state => state.page)
  const dispatch = useDispatch()
  const [dataAPI, setDataAPI] = useState({})
  const navigate = useNavigate()
  const location = useLocation()
  const setVariables = (data) => {
    console.log(data)
    if (data.nft.length === 0) {
      /*     console.log('holis')
      let timerInterval
      Swal.fire({
        title: 'Oops!',
        html: 'Nothing was found',
        timer: 1000,
        showConfirmButton: false,
        didOpen: () => {
          dispatch(resetFilters())
          navigate('/home', { push: true })
          timerInterval = setInterval(() => {
            Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      }) */

      dispatch(resetFilters())
      navigate('/home', { push: true })
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: 'white',
        customClass: {
          popup: 'colored_toast'
        },
        showConfirmButton: false,
        timer: 1800,
        timerProgressBar: true
      })
      Toast.fire({
        icon: 'error',
        title: 'Nothing found'
      })
    }
    setDataAPI(data)
    dispatch(setPageMax(data.totalPage))
  }

  /*   useEffect(() => {
    window.scrollTo(0, 0)
    axios.post(`/stores/nft?offset=${page.current || 0}`, filterConfig)
      .then(response => setVariables(response.data))
  }, [filterConfig, page.current]) */

  useEffect(() => {
    let url = 'home?'
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
    if (url !== 'home?') {
      navigate(`/${url}`, { push: true })
    }
  }, [filterConfig, page])

  useEffect(() => {
    window.scrollTo(0, 0)
    axios.get(`/stores/nft${location.search}`)
      .then(response => setVariables(response.data))
  }, [location.search])

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
        {data && dataAPI.nft?.map(item => <Card key={item.id} title={item.title} id={item.id} image={item.path} price={item.price}/>)}
      </div>
      <Pagination />
      <Footer/>

    </div>
  )
}
