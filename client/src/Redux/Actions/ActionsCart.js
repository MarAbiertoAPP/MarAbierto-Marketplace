import { ADD_TO_CART, REMOVE_FROM_CART, CART_FROM_LOCAL_STORAGE } from './ActionsCreators'

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
