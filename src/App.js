import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Cart/>
          <Footer/>
      </div>
    );
  }
}

export default App;
