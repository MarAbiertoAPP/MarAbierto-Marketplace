import { GET_ALL_NFT, CREATE_NFT } from './ActionsCreators'
import axios from 'axios'

export function getAllNFT () {
  return function (dispatch) {
    axios(`http://localhost:${process.env.PORT}/store/all`)
      .then(res => {
        dispatch({ type: GET_ALL_NFT, payload: res.data })
      }).catch(error => console.log(error.message))
  }
}

export function createNFT (obj) {
  return function (dispatch) {
    axios.post(`http://localhost:${process.env.PORT}/store/add`, obj)
      .then(dispatch({ type: CREATE_NFT }))
      .catch(error => console.log(error.message))
  }
}
