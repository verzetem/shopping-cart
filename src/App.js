import React, { Component } from "react"
import "./App.css"
import CartHeader from "./Components/CartHeader"
import CartFooter from "./Components/CartFooter"
import CartItems from "./Components/CartItems"
import AddItem from "./Components/AddItem"

class App extends Component {
  
  state = {
      cartItemsList:
    [
      {id: 1, product: { id: 40, name: "Mediocre Iron Watch", priceInCents: 399 }, quantity: 1 },
      {id: 2, product: { id: 41, name: "Heavy Duty Concrete Plate", priceInCents: 499 }, quantity: 1 },
      {id: 3, product: { id: 42, name: "Intelligent Paper Knife", priceInCents: 1999 }, quantity: 1 },
    ],
      products: 
    [
      { id: 40, name: "Mediocre Iron Watch", priceInCents: 399 },
      { id: 41, name: "Heavy Duty Concrete Plate", priceInCents: 499 },
      { id: 42, name: "Intelligent Paper Knife", priceInCents: 1999 },
      { id: 43, name: "Small Aluminum Keyboard", priceInCents: 2500 },
      { id: 44, name: "Practical Copper Plate", priceInCents: 1000 },
      { id: 45, name: "Awesome Bronze Pants", priceInCents: 399 },
      { id: 46, name: "Intelligent Leather Clock", priceInCents: 2999 },
      { id: 47, name: "Ergonomic Bronze Lamp", priceInCents: 40000 },
      { id: 48, name: "Awesome Leather Shoes", priceInCents: 3990 },
    ],
      newProd: {
        id: "",
        name: "",
        priceInCents: 0,
      },
      quantity: 0,
   }

  addToCart = (e) => {
    e.preventDefault()
    if (this.state.quantity == 0 || this.state.quantity === "") {
      alert("Please Enter Quantity")
      } else {
      let cartList = this.state.cartItemsList
      let newItem = {id: this.state.cartItemsList.length + 1, product: { id: this.state.newProd.id, name: this.state.newProd.name, priceInCents: this.state.newProd.priceInCents}, quantity: this.state.quantity}
      this.setState({ cartItemsList: cartList.concat(newItem) })
    }
  }

  inputListen = (e) => {
    e.preventDefault()
    this.setState({quantity: e.target.value})
  }

  optionChange = (e) => {
    this.setState({newProd: {name: (e.target.value)} })
  }
  
  addToProdList = (e) => {
    e.preventDefault()
    for (let i = 0; i < e.target.length; i++) {
      if (e.target.value === e.target[i].value) {
        let prodID = e.target[i].attributes.pid.value
        let prodPrice = e.target[i].attributes.price.value
        let prodName = e.target[i].value
        this.setState({ newProd: { id: prodID, name: prodName, priceInCents: prodPrice } })
      }
    }
  }

  render() {
    const gTotal = this.state.cartItemsList.reduce((total, cartItem) => {
      return total + Number(cartItem.product.priceInCents * cartItem.quantity)
    }, 0)
    return (
      <div className="App">
        <CartHeader />
        <CartItems cartItemsList={this.state.cartItemsList} productsList={this.state.products} quantity={this.state.quantity} />
        <div className="container"><h5 className="white right">Grand Total: {gTotal/100}</h5></div>
        <AddItem addToCart={this.addToCart} productsList={this.state.products} addToProdList={this.addToProdList} inputListen={this.inputListen} optionChange={this.optionChange} />
        <CartFooter copyright="&copy;" year="2018" />
      </div>
    )
  }
}
export default App