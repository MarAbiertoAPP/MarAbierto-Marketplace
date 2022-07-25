import { DETAIL } from './ActionsCreators'
export function passDetail (detailData) {
  return {
    type: DETAIL,
    payload: detailData
  }
}
