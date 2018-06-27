import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchProduct } from '../actions/products'

class ProductDetails extends PureComponent {
    static propTypes = {
        product: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          description: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired
        }).isRequired
    }

    componentWillMount() {
        this.props.fetchProduct(this.props.match.params.id)
    }

    render() {
      const {product} = this.props
      if (!product) return null

      return (
        <div>
          <h1>{ product.name }</h1>
          <p>&euro; { product.price }.00</p>
          <p>{ product.description }</p>
          { !product.image && <p>Looking for image</p>}
          { product.image && <p><img src={ product.image } alt=''/></p>}
          <button>Buy this product</button>
        </div>
      )
    }
  }
  
  const mapStateToProps = function (state, props) {
    return {
      product: state.product
    }
  }

  export default connect(mapStateToProps, {fetchProduct})(ProductDetails)

  