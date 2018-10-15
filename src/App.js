import React, { Component } from 'react';
import './App.css';
import CartHeader from './Components/CartHeader';
import CartFooter from './Components/CartFooter';
import CartItems from './Components/CartItems';
import AddItem from './Components/AddItem';


class App extends Component {
  state = {
      cartItemsList:
    [
      { product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 1 },
      { product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
      products: 
    [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],
      newItem: {
        id: null,
        name: "",
        priceInCents: null,
        quantity: 0,
      }
   }

  
  inputListen = (e) => {
    e.preventDefault()
    this.setState({newItem: {quantity: Number(e.target.value)}})
    // console.log(this.state.newItem.quantity)
  }

  optionChange = (e) => {
    this.setState({newItem: {name: (e.target.value)} })
    // console.log("newItem: name=", this.state.newItem.name)
    console.log(this.state.newItem)
  }
  
  addToProdList = (e) => {
    e.preventDefault()
    let cartList = this.state.cartItemsList
    // let addNew = { id: }
    if (this.state.newItem.quantity == 0 || "") {
      alert("Enter Quantity")
    } else {
      for (let i = 0; i < e.target.length; i++) {
        if (e.target.value === e.target[i].value) {
          const productID = e.target[i].attributes.pid
          const productPrice = e.target[i].attributes.price
          // console.log("id and price", e.target.value, productID, productPrice)
          // this.setState({ newItem: {  } })
       }
      }
    }

  }


  render() {


    return (
      <div className="App ">
        <CartHeader />
        <CartItems cartItemsList={this.state.cartItemsList} productsList={this.state.products} />
        <AddItem productsList={this.state.products} addToProdList={this.addToProdList} inputListen={this.inputListen} optionChange={this.optionChange} />
        <CartFooter copyright="&copy;" year="2018" />
      </div>
    );
  }
}

export default App;
