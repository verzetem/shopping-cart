import React from 'react';
import CartItem from './CartItem'

const CartItems = ({ cartItemsList, productsList }) => {

const grandTotal = () => {
    for (let i = 0; i < cartItemsList.length; i++) {
    	let total = 0
    	total = cartItemsList[i].product.priceInCents/100
    	return total
    }
  }

  return (
    <div className="container">
	    <h1 className="white">Cart Items</h1>
	    <div className="list-group">
	      <div className="list-group-item">
	        <div className="row">
	          <div className="col-md-8 bold">Product</div>
	          <div className="col-md-2 bold">Price</div>
	          <div className="col-md-2 bold">Quantity</div>
	        </div>
	      </div>
	      <CartItem cartItemsList={cartItemsList} productsList={productsList} />
	    </div>
	    <h5 className="white right">Grand Total: ${grandTotal()}</h5>
	  </div>
  );
}

export default CartItems;