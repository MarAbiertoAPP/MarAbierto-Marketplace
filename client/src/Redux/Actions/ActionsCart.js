import { CART_FROM_LOCAL_STORAGE, BUY_NOW, CLEAN_BUY_NOW, GET_ALL_CART } from './ActionsCreators'
import axios from 'axios'
export function addToCart ({ userId, nftId }) {
  return function (dispatch) {
    console.log(`entre a addto cart con el user id: ${userId} y el nftId: ${nftId}`)
    axios.post('/car', { nftId, userId })
      .then((res) => {
        console.log(res)
      })

      .catch(error => console.log(`aqui el error en action ${error.message}`))
  }
}

export function removeFromCart ({ userId, nftId }) {
  console.log(`entre a removeFromCart con el userid: ${userId} y el nftId: ${nftId}`)
  return function () {
    axios.delete('/car', { nftId, userId })
      .then((res) => {
        console.log(res)
      })
      .catch(error => console.log(`borrado error ${error.message}`))
  }
}
export function getAllCart (userId) {
  if (!userId) {
    return {
      type: GET_ALL_CART,
      payload: []
    }
  }

  return function (dispatch) {
    axios.get(`/car/${userId}`)
      .then(res => {
        console.log('esta es la res de getallcar', res.data)
        dispatch({
          type: GET_ALL_CART,
          payload: res.data
        })
      })
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
