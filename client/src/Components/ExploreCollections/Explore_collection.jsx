import React, { useEffect, useState } from 'react'
import style from './Explore_collection.module.css'
import Nav from '../UI/Nav/Navigation'
import CardExploreCollections from './ExploreCollectionsResources/CardExploreCollections'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { createUser, getFilterCollection, setPageMaxCollec } from '../../Redux/Actions'
import PaginationCollection from './PaginationCollection/PaginationCollection'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import FilterCollections from './FiltersCollections/FilterCollections'
import { useAuth0 } from '@auth0/auth0-react'

const ExploreCollection = () => {
  const dispatch = useDispatch()
  const { isAuthenticated, user } = useAuth0()
  const [t] = useTranslation('faq')

  useEffect(() => {
    dispatch(getFilterCollection())
    window.scrollTo(0, 0)
    if (isAuthenticated) {
      dispatch(createUser(user))
    }
  }, [])

  // const handleClick = (e) => {
  //   dispatch(getFilterCollection(e.target.value))
  // }

  /// //////////////////////////////////////////////////////////////////
  // PAGINATION
  /// //////////////////////////////////////////////////////////////////
  const filterConfig = useSelector(state => state.filterCollec)

  const [dataAPI, setDataAPI] = useState({})
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    let url = stateToUrl(filterConfig)
    url = url.slice(0, -1)
    if (url !== 'collection?') {
      navigate(`/${url}`, { replace: true })
    }
  }, [filterConfig])

  useEffect(() => {
    if (location.pathname === '/collection') {
      urlToState(location.search)
      axios.get(`/collection/all${location.search}`)
        .then(response => setVariables(response.data))
        .catch(err => errorHandler(err))
    }
  }, [location.search])

  const stateToUrl = (stateFilters) => {
    let url = 'collection?'
    if (stateFilters.title) url += `title=${stateFilters.title}&`
    if (stateFilters.categoryName) url += `category=${stateFilters.categoryName}&`
    if (stateFilters.isActive) url += `isActive=${stateFilters.isActive}&`
    if (stateFilters.userId) url += `userId=${stateFilters.userId}&`
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
  }

  const setVariables = (data) => {
    if (data.collections.length === 0) {
      errorHandler()
    } else {
      setDataAPI(data)
      dispatch(setPageMaxCollec(data.totalPages))
    }
  }

  const errorHandler = () => {
    navigate('/collection', { push: true })
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
    <div className={style.div}>
      <Nav/>
      <div className='mt-16 w-full max-w-screen-xl'>
      <h1 className='text-3xl text-white'>{t('ExploreCollections.ExploreCollections')}</h1>

      <div className='w-full flex space-x-10 mt-8'>
      <FilterCollections/>

      </div>
      <div className='w-full mt-10 flex flex-row flex-wrap justify-center'>
        {dataAPI && dataAPI.collections?.map(({ name, frontPage, id, mini }) => frontPage
          ? <CardExploreCollections key={id} id={id} frontPage={frontPage} mini={mini} name={name}/>
          : null)}
      </div>
<PaginationCollection/>
      </div>
    </div>

  )
}

export default ExploreCollection
