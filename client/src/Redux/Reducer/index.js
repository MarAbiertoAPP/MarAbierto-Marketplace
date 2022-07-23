import { CREATE_NFT, FILTER_BY_PRICE, FILTER_BY_CATEGORY, FILTER_BY_TITLE, FILTER_BY_STATE, FILTER_BY_USER, RESET_FILTERS, SET_SORT, SET_PAGE, SET_PAGE_MAX, CREATE_USER, GET_ALL_CATEGORIES, ADD_TO_CART, REMOVE_FROM_CART, GET_CLIENTE_SECRET } from '../Actions/ActionsCreators'
const initialState = {
  filter: {
    price: null,
    title: null,
    categoryId: null,
    isActive: null,
    userId: null,
    order: null
  },
  page: {
    current: 0,
    max: undefined
  },
  categories: [],
  filterBar: false,
  Cart: [],
  payData: []
}

export default function rootReducer (state = initialState, action) {
  switch (action.type) {
    case CREATE_NFT:
      return {
        ...state
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
        filter: {
          ...state.filter,
          title: action.payload
        }
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

    case RESET_FILTERS: {
      return {
        ...state,
        filter: {
          price: null,
          title: null,
          categoryId: null,
          isActive: null,
          userId: null,
          order: null
        }
      }
    }

    case SET_SORT:
      return {
        ...state,
        filter: {
          ...state.filter,
          order: action.payload
        }
      }

    case SET_PAGE:
      return {
        ...state,
        page: {
          ...state.page,
          current: action.payload
        }
      }

    case SET_PAGE_MAX:
      return {
        ...state,
        page: {
          ...state.page,
          max: action.payload
        }
      }

    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }

    case CREATE_USER:
      return {
        ...state
      }
    case ADD_TO_CART:
      return {
        ...state,
        Cart: [...state.Cart, action.payload]
      }
    case REMOVE_FROM_CART:

      return {

        ...state,
        Cart: [...state.Cart.filter((item) => item.id !== action.payload)]
      }
    case GET_CLIENTE_SECRET:
      return {
        ...state,
        payData: action.payload

      }

    default:
      return { ...state }
  }
}
