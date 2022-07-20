import { GET_ALL_NFT, CREATE_NFT, FILTER_BY_PRICE, FILTER_BY_TITLE, FILTER_BY_CATEGORY, FILTER_BY_STATE, FILTER_BY_USER, CREATE_USER } from './ActionsCreators'
import axios from 'axios'

export function getAllNFT (page, NFTperPage) {
  return function (dispatch) {
    axios(`/stores/all?offset=${page}&limit=${NFTperPage}`)
      .then(res => {
        dispatch({ type: GET_ALL_NFT, payload: res.data })
      }).catch(error => console.log(error.message))
  }
}

export function createNFT (obj) {
  return function (dispatch) {
    axios.post('/stores', obj)
      .then(dispatch({ type: CREATE_NFT }))
      .catch(error => console.log(error.message))
  }
}

export function filterByPrice (min, max) {
  return function (dispatch) {
    axios(`/stores/nft?price=${min}_${max}`)
      .then(res =>
        dispatch({ type: FILTER_BY_PRICE, payload: res.data }))
      .catch(error => console.log(error.message))
  }
}

export function filterByCategory (categoryId) {
  return function (dispatch) {
    axios(`/stores/nft?categoryID=${categoryId}`)
      .then(res => {
        dispatch({ type: FILTER_BY_CATEGORY, payload: res.data })
      }).catch(error => console.log(error.message))
  }
}
export function filterByTitle (title) {
  return function (dispatch) {
    axios(`/stores/nft?title=${title}`)
      .then(res => {
        dispatch({ type: FILTER_BY_TITLE, payload: res.data })
      })
  }
}
export function filterByUser (userId) {
  return function (dispatch) {
    axios(`/stores/nft?userId=${userId}`)
      .then(res => {
        dispatch({ type: FILTER_BY_USER, payload: res.data })
      }).catch(error => console.log(error))
  }
}
// filter if the user is active or not
export function FilterByState (state) {
  return function (dispatch) {
    axios(`/stores/nft?isActive=${state}`)
      .then(res => {
        dispatch({ type: FILTER_BY_STATE, payload: res.data })
      }).catch(error => console.log(error))
  }
}
export function createUser (obj) {
  return function (dispatch) {
    axios.post('/users/signup', obj)
      .then(dispatch({ type: CREATE_USER }))
      .catch(error => console.log(error))
  }
}
