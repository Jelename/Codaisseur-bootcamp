import React, {PureComponent} from 'react'

export default class CartItem extends PureComponent {
  render() {
    return (
    <li>
      <p>{this.props.name}</p>
      <p>{this.props.price}</p>
    </li>
  )
  }
}
