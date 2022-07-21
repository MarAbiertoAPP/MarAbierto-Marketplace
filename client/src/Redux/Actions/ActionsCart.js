import { ADD_TO_CART } from './ActionsCreators'

export function addToCart (id) {
  return {
    type: ADD_TO_CART,
    payload: id
  }
}
