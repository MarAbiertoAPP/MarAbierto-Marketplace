import {
  CREATE_NFT,
  FILTER_BY_PRICE,
  FILTER_BY_TITLE,
  FILTER_BY_CATEGORY,
  FILTER_BY_STATE,
  FILTER_BY_USER,
  RESET_FILTERS,
  SET_SORT,
  SET_PAGE,
  SET_PAGE_MAX,
  CREATE_USER,
  GET_ALL_CATEGORIES,
  CREATE_CATEGORIES,
  SET_USER,
  GET_CLIENTE_SECRET,
  SET_MULTIPLE_FILTERS,
  GET_ALL_COLLECTION,
  GET_COLLECTION_BY_NAME
  // GET_LAST_DROPS,
  // GET_TOP_DROPS
} from './ActionsCreators'
import axios from 'axios'

export function createNFT (obj) {
  return function (dispatch) {
    axios.post('/stores', obj)
      .then(dispatch({ type: CREATE_NFT }))
      .catch(error => console.log(error.message))
  }
}

export function filterByPrice (min, max) {
  if (!min && !max) {
    return {
      type: FILTER_BY_PRICE,
      payload: null
    }
  }

  if (!min) min = 0
  if (!max) max = 999
  return {
    type: FILTER_BY_PRICE,
    payload: `${min}_${max}`
  }
}

export function filterByCategory (categoryId) {
  return {
    type: FILTER_BY_CATEGORY,
    payload: categoryId
  }
}
export function filterByTitle (title) {
  return {
    type: FILTER_BY_TITLE,
    payload: title
  }
}
export function filterByUser (userId) {
  return {
    type: FILTER_BY_USER,
    payload: userId
  }
}
// filter if the user is active or not
export function FilterByState (state) {
  return {
    type: FILTER_BY_STATE,
    payload: state
  }
}

export function resetFilters () {
  return {
    type: RESET_FILTERS
  }
}

export function setMultipleFilters (payload) {
  return {
    type: SET_MULTIPLE_FILTERS,
    payload
  }
}

export function setSort (payload) {
  return {
    type: SET_SORT,
    payload
  }
}

export function setPage (page) {
  return {
    type: SET_PAGE,
    payload: page
  }
}

export function setPageMax (pageMax) {
  return {
    type: SET_PAGE_MAX,
    payload: pageMax
  }
}

export function createUser (obj) {
  return function (dispatch) {
    axios.post('/users/signup', obj)
      .then(res => window.localStorage.setItem('User', JSON.stringify(res.data)))
      .then(dispatch({ type: CREATE_USER }))
      .catch(error => console.log(error.message))
  }
}
export function userFromLocalStorage () {
  return function (dispatch) {
    const user = window.localStorage.getItem('User')
    if (user) {
      dispatch({
        type: SET_USER,
        payload: JSON.parse(user)
      })
    }
  }
}
export function getAllCategories () {
  return function (dispatch) {
    axios('/categories')
      .then(res => dispatch({
        type: GET_ALL_CATEGORIES,
        payload: res.data
      }))
  }
}

export function createCategories (item) {
  return function (dispatch) {
    axios.post('/categories', item)
      .then(dispatch({
        type: CREATE_CATEGORIES
      }))
  }
}
export function getClientPay (data) {
  return {
    type: GET_CLIENTE_SECRET,
    payload: data

  }
}

export function getAllCollection () {
  return function (dispatch) {
    axios('/collection/all')
      .then(res => dispatch({
        type: GET_ALL_COLLECTION,
        payload: res.data
      }))
      .catch(error => console.log(error.message))
  }
}

export function getCollectionByName (name) {
  return function (dispatch) {
    axios(`/collection/detail/${name}`)
      .then(res => dispatch({
        type: GET_COLLECTION_BY_NAME,
        payload: res.data
      }))
      .catch(error => console.log(error.message))
  }
}

// export function getLastDrops(){
//   return function(dispatch){
//     axios.get()
//   }
// }
