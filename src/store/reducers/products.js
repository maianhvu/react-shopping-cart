const initialState = [
  { productId: 0, name: 'Basket', price: 4.99 },
  { productId: 1, name: 'Lamp', price: 24.99 }
]

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const { productId, name, price } = action
      return [...state, { productId, name, price }]
    default:
      return state
  }
}

export default products
