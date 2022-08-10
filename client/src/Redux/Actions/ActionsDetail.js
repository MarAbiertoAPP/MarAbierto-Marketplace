import axios from 'axios'
import { DETAIL, GET_ALL_FAVORITES } from './ActionsCreators'

export function passDetail (detailData) {
  return {
    type: DETAIL,
    payload: detailData
  }
}

export function getAllFavorites (userId) {
  console.log('userId', userId)
  if (!userId) {
    return {
      type: GET_ALL_FAVORITES,
      payload: []
    }
  }
  return function (dispatch) {
    axios.get(`/favorite/${userId}`)
      .then(res => {
        dispatch({
          type: GET_ALL_FAVORITES,
          payload: res.data
        })
      })
  }
}
