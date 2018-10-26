let nextProductId = 0

export const addProduct = (name, price) => ({
  type: 'ADD_PRODUCT',
  productId: nextProductId++,
  name,
  price
})
