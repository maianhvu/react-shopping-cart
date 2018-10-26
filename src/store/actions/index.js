let nextProductId = 0

export const addProduct = (name, price) => ({
  type: 'ADD_PRODUCT',
  productId: nextProductId++,
  name,
  price
})

export const addToCart = productId => ({
  type: 'ADD_TO_CART',
  productId
})
