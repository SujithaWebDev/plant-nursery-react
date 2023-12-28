import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Product from './Product'
import Cart from './Cart';
import About from './About';
import './navbar.css';
import { useState } from 'react';
function App() {
  const [cart,setCart]=useState([]);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar cart={cart} setCart={setCart}></Navbar>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='about' element={<About></About>}></Route>
          <Route path='product' element={<Product cart={cart} setCart={setCart}/>}></Route>
          <Route path='cart' element={<Cart cart={cart} setCart={setCart}/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
