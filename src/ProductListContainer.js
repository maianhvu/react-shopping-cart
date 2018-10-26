import { connect } from 'react-redux'
import ProductList from './ProductList'

const mapStateToProps = ({ products }) => ({ products })

const ProductListContainer = connect(mapStateToProps)(ProductList)

export default ProductListContainer
