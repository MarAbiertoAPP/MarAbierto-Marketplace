import {
  CREATE_NFT,
  FILTER_BY_PRICE,
  FILTER_BY_CATEGORY,
  FILTER_BY_TITLE,
  FILTER_BY_STATE,
  FILTER_BY_USER,
  RESET_FILTERS,
  SET_SORT,
  SET_PAGE,
  SET_PAGE_MAX,
  CREATE_USER,
  GET_ALL_CATEGORIES,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CART_FROM_LOCAL_STORAGE,
  SET_MULTIPLE_FILTERS,
  GET_CLIENTE_SECRET,
  SET_USER,
  DETAIL,
  FILTER_BY_TITLE_CAT,
  FILTER_BY_PRICE_CAT,
  BUY_NOW, CLEAN_BUY_NOW, GET_ETHEREUM_CONV, GET_ALL_COLLECTION, GET_COLLECTION_BY_NAME, GET_FILTER_COLLECTION, FILTER_COLLEC_BY_CATEGORY, SET_PAGE_COLLEC, SET_PAGE_MAX_COLLEC, CLEAN_COLLECTION_BY_NAME
} from '../Actions/ActionsCreators'

const initialState = {
  filter: {
    price: null,
    title: null,
    categoryId: null,
    isActive: null,
    userId: null,
    order: 'id_ASC',
    page: 1,
    max: undefined,
    cardsPerPage: 10
  },
  categories: [],
  filterBar: false,
  Cart: [],
  BuyNow: [],
  User: [],
  payData: [],
  detail: {},
  Conv: [],
  Collection: [],
  CollName: [],
  CollByCategory: [],
  filterCollec: {
    title: null,
    categoryName: null,
    userId: null,
    page: 1,
    max: undefined,
    cardsPerPage: 10
  }
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
          order: 'id_ASC',
          page: 1,
          max: undefined
        },
        filterCollec: {
          title: null,
          price: null,
          categoryName: null,
          userId: null,
          page: 1,
          max: undefined,
          cardsPerPage: 10
        }
      }
    }

    case SET_MULTIPLE_FILTERS: {
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload
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
        filter: {
          ...state.filter,
          page: action.payload
        }
      }

    case SET_PAGE_MAX:
      return {
        ...state,
        filter: {
          ...state.filter,
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
    case SET_USER:
      return {
        ...state, User: action.payload
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

    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        Cart: action.payload
      }

    case GET_CLIENTE_SECRET:
      return {
        ...state,
        payData: action.payload

      }

    case CART_FROM_LOCAL_STORAGE:
      return {
        ...state, Cart: action?.payload || []
      }
    case DETAIL:
      return {
        ...state,
        detail: action.payload

      }
    case BUY_NOW:
      return {
        ...state,
        BuyNow: [action.payload]
      }
    case CLEAN_BUY_NOW:
      return {
        ...state,
        BuyNow: []
      }
    case GET_ETHEREUM_CONV:
      return {
        ...state,
        Conv: action.payload
      }
    case GET_ALL_COLLECTION:
      return {
        ...state,
        Collection: action.payload
      }
    case GET_COLLECTION_BY_NAME:
      return {
        ...state,
        CollName: action.payload
      }
    case CLEAN_COLLECTION_BY_NAME:
      return {
        ...state,
        CollName: action.payload
      }

    case FILTER_BY_TITLE_CAT:
      return {
        ...state,
        filterCollec: { ...state.filterCollec, title: action.payload }
      }

    case FILTER_BY_PRICE_CAT:
      return {
        ...state,
        filterCollec: { ...state.filterCollec, price: action.payload }
      }

    case GET_FILTER_COLLECTION:
      return {
        ...state,
        CollByCategory: action.payload
      }
    case FILTER_COLLEC_BY_CATEGORY:
      return {
        ...state,
        filterCollec: {
          ...state.filterCollec,
          categoryName: action.payload
        }
      }
    case SET_PAGE_COLLEC:
      return {
        ...state,
        filterCollec: {
          ...state.filterCollec,
          page: action.payload
        }
      }

    case SET_PAGE_MAX_COLLEC:
      return {
        ...state,
        filterCollec: {
          ...state.filterCollec,
          max: action.payload
        }
      }

    default:
      return { ...state }
  }
}
