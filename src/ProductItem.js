import React from 'react'

export default ({ product, addToCart }) => (
  <li>
    {product.name} — ${product.price}
    <button onClick={() => addToCart(product.productId)}>+</button>
  </li>
)
