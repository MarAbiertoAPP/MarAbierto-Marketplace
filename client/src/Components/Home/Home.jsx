import React, { useEffect, useState } from 'react'
import Classes from './home.module.css'
import Card from '../UI/Card/Card'
import Nav from '../UI/Nav/Navigation'
import Filters from './Filters/Filters'
import { useSelector, useDispatch } from 'react-redux'
import { setPageMax, resetFilters, getAllCategories, setMultipleFilters, createUser, userFromLocalStorage } from '../../Redux/Actions'
import { cartFromLocalStorage } from '../../Redux/Actions/ActionsCart'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import Pagination from './Pagination/Pagination'
import Footer from '../Footer/Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../Home/toast.css'
import { motion } from 'framer-motion'
import Metamask from '../metamask/Metamask'

const cartFromLocal = JSON.parse(localStorage.getItem('Cart'))

export default function Home () {
  const { isAuthenticated, user } = useAuth0()

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(cartFromLocalStorage(cartFromLocal))
  }, [])

  // Proximo a mover en la landing page
  const filterConfig = useSelector(state => state.filter)
  // const page = useSelector(state => state.page)
  const dispatch = useDispatch()
  /* eslint-disable-next-line */
  const [dataAPI, setDataAPI] = useState({})
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(cartFromLocalStorage(cartFromLocal))
    dispatch(userFromLocalStorage())
    if (isAuthenticated) {
      dispatch(createUser(user))
    }
  }, [])

  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch])

  useEffect(() => {
    let url = stateToUrl(filterConfig)
    url = url.slice(0, -1)
    if (url !== 'home?') {
      navigate(`/${url}`, { push: true })
    }
  }, [filterConfig])

  useEffect(() => {
    window.scrollTo(0, 0)
    if (location.pathname === '/home') {
      window.scrollTo(0, 0)
      urlToState(location.search)
      axios.get(`/stores/nft${location.search}`)
        .then(response => setVariables(response.data))
        .catch(err => errorHandler(err))
    }
  }, [location.search])

  const stateToUrl = (stateFilters) => {
    let url = 'home?'

    if (stateFilters.price) url += `price=${stateFilters.price}&`
    if (stateFilters.title) url += `title=${stateFilters.title}&`
    if (stateFilters.categoryId) url += `categoryId=${stateFilters.categoryId}&`
    if (stateFilters.isActive) url += `isActive=${stateFilters.isActive}&`
    if (stateFilters.userId) url += `userId=${stateFilters.userId}&`
    if (stateFilters.order && stateFilters.order !== 'id_ASC') url += `order=${stateFilters.order}&`
    if (stateFilters.page && stateFilters.page !== 1) url += `page=${stateFilters.page}&`
    if (stateFilters.cardsPerPage && stateFilters.cardsPerPage !== 10) url += `cardsPerPage=${stateFilters.cardsPerPage}&`

    return url
  }

  const urlToState = (url) => {
    if (url === '') return
    const arrQuerys = url.slice(1).split('&')
    const newState = {}
    const numbersKeys = ['page', 'max', 'cardsPerPage']
    for (const query of arrQuerys) {
      const key = query.split('=')[0]
      const value = query.split('=')[1]
      if (numbersKeys.includes(key)) {
        newState[key] = Number(value)
      } else {
        newState[key] = value
      }
    }
    dispatch(setMultipleFilters(newState))
  }

  const setVariables = (data) => {
    if (data.nft.length === 0) {
      errorHandler()
    } else {
      setDataAPI(data)
      dispatch(setPageMax(data.totalPage))
    }
  }

  const errorHandler = () => {
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

  return (
    <motion.div
    className={Classes.div}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <Nav />
      <Metamask />
      <div className='w-full m-20 max-w-screen-xl flex item-center '>
      <iframe className={'w-full h-14 '} src={'https://s.tradingview.com/embed-widget/ticker-tape/?locale=en&page-uri=https%3A%2F%2Fwww.tradingview.com%2Fwidget%2Fticker-tape%2F#%7B%22symbols%22%3A%5B%7B%22description%22%3A%22ETH%2FUSD%22%2C%22proName%22%3A%22BITSTAMP%3AETHUSD%22%7D%2C%7B%22description%22%3A%22USD%2FCLP%22%2C%22proName%22%3A%22FX_IDC%3AUSDCLP%22%7D%2C%7B%22description%22%3A%22USD%2FARS%22%2C%22proName%22%3A%22FX_IDC%3AUSDARS%22%7D%2C%7B%22description%22%3A%22USD%2FCOP%22%2C%22proName%22%3A%22FX_IDC%3AUSDCOP%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A78%2C%22utm_source%22%3A%22www.tradingview.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22ticker-tape%22%7D'}></iframe>
      </div>
      <Filters>
        <motion.div
        className={`${Classes.main} place-content-center`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        >
          {dataAPI && dataAPI.nft?.map(item => item.path ? <Card key={item.id} title={item.title} image={item.path} price={item.price} id={item.id} /> : null)}
        </motion.div>
      </Filters>
      <Pagination />
      <Footer />
    </motion.div>
  )
}
