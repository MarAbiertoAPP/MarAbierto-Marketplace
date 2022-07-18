import { GET_ALL_NFT } from '../Actions/ActionsCreators'

const initialState = {
  nft: []
}

export default function rootReducer (state = initialState, action) {
  switch (action.payload) {
    case GET_ALL_NFT:
      return {
        ...state,
        nft: action.payload
      }

    default:
      return { ...state }
  }
}
