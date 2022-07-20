export const ORDER_RECIPES = 'ORDER_RECIPES'

export const orderNFTS = (order) => (dispatch, getState) => {
  const nftsOrder = getState().search.slice()

  if (order === 'Default') {
    const recipes = getState().nft.slice()
    dispatch({
      type: ORDER_RECIPES,
      payload: recipes
    })
  }

  if (order === 'ascName') {
    const result = nftsOrder.slice().sort((a, b) => a.title.localeCompare(b.title))
    console.log(result)
    return dispatch({ type: ORDER_RECIPES, payload: result })
  }

  if (order === 'descName') {
    const result = nftsOrder.slice().sort((a, b) => b.title.localeCompare(a.title))
    return dispatch({ type: ORDER_RECIPES, payload: result })
  }

  if (order === 'ascHealthScore') {
    const result = nftsOrder.slice().sort((a, b) => a.price - b.price)
    return dispatch({ type: ORDER_RECIPES, payload: result })
  }

  if (order === 'descHealthScore') {
    const result = nftsOrder.slice().sort((a, b) => b.price - a.price)
    return dispatch({ type: ORDER_RECIPES, payload: result })
  }
}
