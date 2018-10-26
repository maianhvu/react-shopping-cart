import { connect } from 'react-redux'
import { addProduct } from './store/actions'
import ProductCreateForm from './ProductCreateForm'

const mapDispatchToProps = dispatch => ({
  createProduct: ({ name, price }) => dispatch(addProduct(name, price))
})

const ProductCreateFormContainer = connect(null, mapDispatchToProps)(
  ProductCreateForm
)
export default ProductCreateFormContainer
