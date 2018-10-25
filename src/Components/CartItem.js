import React from "react"

const CartItem = ({ cartItemsList, productsList }) => {

	return cartItemsList.map((cartItem) => {
		return (
	    <div className="list-group-item">
				<div className="collection-item">
				  <div className="row">
				    <div className="col-md-8">{cartItem.product.name}</div>
				    <div className="col-md-2">${(cartItem.product.priceInCents/100) * cartItem.quantity}</div>
				    <div className="col-md-2">{cartItem.quantity}</div>
				  </div>
				</div>
			</div>
	  )
	})
}
export default CartItem