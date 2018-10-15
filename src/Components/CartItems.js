import React from 'react';
import CartItem from './CartItem'

const CartItems = ({ cartItemsList, productsList }) => {
	
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
	  </div>
  );
}
export default CartItems;