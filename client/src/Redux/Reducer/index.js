import { GET_ALL_NFT, CREATE_NFT, FILTER_BY_PRICE, FILTER_BY_CATEGORY, FILTER_BY_TITLE, FILTER_BY_STATE, FILTER_BY_USER, CREATE_USER } from '../Actions/ActionsCreators'
import { ORDER_RECIPES } from '../Actions/ActionsSort'
import { SHOW_FILTER_BAR } from '../Actions/ActionsFilterBar'

const initialState = {
  nft: [],
  search: [],
  filter: {
    price: null,
    title: null,
    categoryId: null,
    isActive: null,
    userId: null
  },
  filterBar: false
}

export default function rootReducer (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_NFT:
      return {
        ...state,
        nft: action.payload,
        search: action.payload
      }
    case CREATE_NFT:
      return {
        ...state
      }
      // order
    case ORDER_RECIPES:
      return {
        ...state,
        search: {
          ...state.search,
          nft: action.payload
        }
      }
    case SHOW_FILTER_BAR:
      return {
        ...state,
        filterBar: action.payload
      }
    case FILTER_BY_PRICE:
      return {
        ...state,
        filter: {
          ...state.filter,
          price: action.payload
        }
      }
    case FILTER_BY_TITLE:
      return {
        ...state,
        search: action.payload
      }
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        filter: {
          ...state.filter,
          categoryId: action.payload
        }
      }
    case FILTER_BY_STATE:
      return {
        ...state,
        filter: {
          ...state.filter,
          isActive: action.payload
        }
      }
    case FILTER_BY_USER:
      return {
        ...state,
        filter: {
          ...state.filter,
          userId: action.payload
        }
      }
    case CREATE_USER:
      return {
        ...state
      }
    default:
      return { ...state }
  }
}
