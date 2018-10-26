import { connect } from 'react-redux'
import { addToCart } from './store/actions'
import ProductItem from './ProductItem'

const mapDispatchToProps = dispatch => ({
  addToCart: productId => dispatch(addToCart(productId))
})

const ProductItemContainer = connect(null, mapDispatchToProps)(ProductItem)
export default ProductItemContainer
