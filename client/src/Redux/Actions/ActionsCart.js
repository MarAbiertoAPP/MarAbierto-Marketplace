import { CART_FROM_LOCAL_STORAGE, BUY_NOW, CLEAN_BUY_NOW, GET_ALL_CART } from './ActionsCreators'
import axios from 'axios'
export function addToCart (id, userId) {
  return function (dispatch) {
    axios.post('/car', { id, userId })

      .catch(error => console.log(error.message))
  }
}

export function removeFromCart (nftId, userId) {
  return function () {
    axios.delete('/car', { nftId, userId })

      .catch(error => console.log(error.message))
  }
}
export function getAllCart (userId) {
  return function (dispatch) {
    axios(`/car/${userId}`)
      .then(res => dispatch({
        type: GET_ALL_CART,
        payload: res.data
      }))
  }
}
export function cartFromLocalStorage (cart) {
  return {
    type: CART_FROM_LOCAL_STORAGE,
    payload: cart
  }
}

export function buyNow (id) {
  return {
    type: BUY_NOW,
    payload: id
  }
}

export function cleanBuyNow () {
  return {
    type: CLEAN_BUY_NOW,
    payload: null
  }
}

export function cleanAllCart (userId) {
  return function () {
    axios.delete(`/car/${userId}`)
  }
}
