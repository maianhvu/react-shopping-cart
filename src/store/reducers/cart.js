const cart = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { productId } = action
      const oldQuantity = state[productId] ? state[productId].quantity : 0
      return { ...state, [productId]: { quantity: oldQuantity + 1 } }
    default:
      return state
  }
}

export default cart
