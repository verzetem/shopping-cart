import React from "react"

const AddItem = ({ productsList, addToProdList, inputListen, addToCart }) => {

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
			</div>
			<button onClick={addToCart} className="btn btn-warning">Submit</button>
		</form>
	</div>
 )
}
export default AddItem