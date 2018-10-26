import React, { Component } from 'react'
import './App.css'
import ProductList from './ProductList'

class App extends Component {
  constructor () {
    super()
    this.state = {
      products: [
        { productId: 0, name: 'Basket', price: 4.99 },
        { productId: 1, name: 'Lamp', price: 24.99 }
      ]
    }
  }

  render () {
    return (
      <div className='App'>
        <ProductList products={this.state.products} />
      </div>
    )
  }
}

export default App
