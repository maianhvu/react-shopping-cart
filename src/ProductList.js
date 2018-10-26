import React from 'react'
import ProductItemContainer from './ProductItemContainer'

export default ({ products }) => (
  <ul>
    {products.map(product => (
      <ProductItemContainer product={product} key={product.productId} />
    ))}
  </ul>
)
