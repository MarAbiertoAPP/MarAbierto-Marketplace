import { ADD_TO_CART, REMOVE_FROM_CART, CART_FROM_LOCAL_STORAGE, BUY_NOW, CLEAN_BUY_NOW, REMOVE_ALL_FROM_CART } from './ActionsCreators'

export function addToCart (id) {
  return {
    type: ADD_TO_CART,
    payload: id
  }
}
export function removeFromCart (id) {
  return {
    type: REMOVE_FROM_CART,
    payload: id
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

export function cleanAllCart () {
  return {
    type: REMOVE_ALL_FROM_CART,
    payload: []
  }
}
