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
      newProd: {
        id: "",
        name: "",
        priceInCents: 0,
      },
      quantity: 0,
   }

  addToCart = (e) => {
    e.preventDefault()
    let cartList = this.state.cartItemsList
    let newItem = { product: { id: this.state.newProd.id, name: this.state.newProd.name, priceInCents: this.state.newProd.priceInCents}, quantity: this.state.quantity}
    this.setState({ cartItemsList: cartList.concat(newItem) })
    // console.log("app.js addToCart", this.state.newProd)
  }

  inputListen = (e) => {
    e.preventDefault()
    this.setState({quantity: e.target.value})
    // console.log(this.state.quantity)
  }

  optionChange = (e) => {
    this.setState({newProd: {name: (e.target.value)} })
    // console.log("newItem: name=", this.state.newItem.name)
    // console.log(this.state.newProd)
  }
  
  addToProdList = (e) => {
    e.preventDefault()
      for (let i = 0; i < e.target.length; i++) {
        if (e.target.value === e.target[i].value) {
          let prodID = e.target[i].attributes.pid.value
          let prodPrice = e.target[i].attributes.price.value
          let prodName = e.target[i].value
          // console.log("id price name:", e.target.value, prodID, prodPrice, prodName, this.state.newProd.quantity)
          this.setState({ newProd: { id: prodID, name: prodName, priceInCents: prodPrice } })
       }
      }
  }


  render() {


    return (
      <div className="App ">
        <CartHeader />
        <CartItems cartItemsList={this.state.cartItemsList} productsList={this.state.products} />
        <AddItem addToCart={this.addToCart} productsList={this.state.products} addToProdList={this.addToProdList} inputListen={this.inputListen} optionChange={this.optionChange} />
        <CartFooter copyright="&copy;" year="2018" />
      </div>
    );
  }
}

export default App;
