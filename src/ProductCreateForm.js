import React, { Component } from 'react'

export default class ProductCreateForm extends Component {
  render () {
    return (
      <div>
        <div>Name: <input ref={ref => (this.nameInput = ref)} /></div>
        <div>Price: <input ref={ref => (this.priceInput = ref)} /></div>
        <div><button onClick={this.onCreate}>Create</button></div>
      </div>
    )
  }

  onCreate = () => {
    const name = this.nameInput.value
    const price = parseFloat(this.priceInput.value)
    this.props.createProduct({ name, price })
    this.nameInput.value = ''
    this.priceInput.value = ''
  }
}
