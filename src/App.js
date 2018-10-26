import React, { Component } from 'react'
import './App.css'
import ProductListContainer from './ProductListContainer'
import ProductCreateFormContainer from './ProductCreateFormContainer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <ProductListContainer />
        <ProductCreateFormContainer />
      </div>
    )
  }
}

export default App
