import React from 'react'
import ProductItem from './ProductItem'

export default ({ products }) => (
  <ul>
    {products.map(product => (
      <ProductItem product={product} key={product.productId} />
    ))}
  </ul>
)
