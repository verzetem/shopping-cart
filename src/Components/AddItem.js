import React from 'react';

const AddItem = ({ productsList, addToProdList, inputListen }) => {

	
	// const optionChange = (e) => {		
	// 	for (let i = 0; i < e.target.length; i++) {
	// 		if (e.target.value === e.target[i].value) {
	// 			const productID = e.target[i].attributes.pid
	// 			const productPrice = e.target[i].attributes.price
	// 			console.log("id and price", e.target.value, productID, productPrice)
	// 	 }
	// 	}
	// 	e.persist(console.log(e))
	// }

	return (

		<div className="container">
	  <form>
    	<div className="form-group">
		    <label htmlFor="quantity" className="white"> Quantity </label>
		    <input onChange={inputListen} type="number" className="form-control" id="quantity" placeholder="Enter quantity" />
		    <label htmlFor="products" className="white"> Products </label>
		    <select onChange={addToProdList} className="form-control">
		    <option defaultValue="selected">Select an option</option>
		      { productsList.map((product) => 
						<option id="options" key={product.id} pid={product.id} price={product.priceInCents}>{product.name}</option>
		      )}
		    </select>
		    <h5 className="white">Price per selected item: </h5>
		  </div>
		    <button className="btn btn-warning"> Submit </button>
	  </form>
  </div>

  )
}

export default AddItem;
