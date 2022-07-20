export const ORDER_RECIPES = 'ORDER_RECIPES'

export const orderNFTS = (order) => (dispatch, getState) => {
  const nftsOrder = getState().search.nft.slice()

  if (order === 'Default') {
    const recipes = getState().nft.nft.slice()
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

  if (order === 'ascPrice') {
    const result = nftsOrder.slice().sort((a, b) => a.price - b.price)
    console.log(result)
    return dispatch({ type: ORDER_RECIPES, payload: result })
  }

  if (order === 'descPrice') {
    const result = nftsOrder.slice().sort((a, b) => b.price - a.price)
    return dispatch({ type: ORDER_RECIPES, payload: result })
  }
}
