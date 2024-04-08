import React, { Component } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Assets/banner_mens.png';
import women_banner from './Assets/banner_women.png';
import kid_banner from './Assets/banner_kids.png';

class App extends Component{
  render(){
  return (
    <div className="App">
      <BrowserRouter>
                <Navbar/>
            <Routes >
                <Route path='/' element={<Shop/>}/>
                <Route path='/men' element={<Shopcategory banner={men_banner} category="men"/>}/>
                <Route path='/women' element={<Shopcategory banner={women_banner} category="women"/>}/>
                <Route path='/Kid' element={<Shopcategory banner={kid_banner} category="kid"/>}/>
                <Route path='/login' element={<LoginSignup/>}/>
                <Route path='/Cart' element={<Cart/>}/>
                <Route path="/product" element={<Product/>} >
                <Route path=':productId' element={<Product/>}/>
                </Route>
                </Routes>
                <Footer/>
                </BrowserRouter>
    </div>
  );
}
}
export default App;
