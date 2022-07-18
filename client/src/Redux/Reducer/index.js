import {GET_ALL_NFT, CREATE_NFT} from '../Actions/ActionsCreators'

let initialState = {
 nft: []
}

export default function rootReducer(state = initialState, action) {
    switch(action.payload){
        case GET_ALL_NFT:
            return {
                ...state,
                nft: action.payload
            }
        case CREATE_NFT:
            return {
                ...state
            }
            default: 
            return {...state}
    }
}