export const SHOW_FILTER_BAR = 'SHOW_FILTER_BAR'

export const showFilterBar = () => (dispatch, getState) => {
  const isShowed = getState().filterBar
  if (isShowed === true) {
    return dispatch({
      type: SHOW_FILTER_BAR,
      payload: false
    })
  } else {
    return dispatch({
      type: SHOW_FILTER_BAR,
      payload: true
    })
  }
}
