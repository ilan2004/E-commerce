import React, { useState } from 'react';
import Logo from '../../Assets/Baggi_transparent.png';
import { Link } from 'react-router-dom';
import Cart from '../../Assets/cart_icon.png';
import { useContext } from 'react';
import './Navbar.css';
import { ShopContext } from '../../Context/ShopContext';
 const Navbar = () => {
  const {getTotalCartItems}= useContext(ShopContext);
    const [menu,setMenu] = useState("grocery")
  return (
    <nav className="navbar">
        <div className="nav-logo">
      <img className="navbar-logo-img" src={Logo} />
      <p>BAGGi</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link to='/' >Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link to='/men'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link to='./women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to='Kid'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
      
      
        <button className='login'><Link to ='Login'>login</Link></button>
        
        
       <Link to='/Cart'> <img src={Cart} alt="" className='cart' /></Link>
        
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
        
      </div>
      
    </nav>
  )
}
export default Navbar;