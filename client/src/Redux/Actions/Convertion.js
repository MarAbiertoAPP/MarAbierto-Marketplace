import { GET_ETHEREUM_CONV } from './ActionsCreators'
import axios from 'axios'

export const getEthereumConv = () => {
  return function (dispatch) {
    axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
      .then(res => dispatch({
        type: GET_ETHEREUM_CONV,
        payload: res.data
      })
      )
  }
}
