import {useContext,React,} from 'react'
import { ShopContext } from '../../Context/ShopContext';
import './Cartitems.css';
import remove from '../../Assets/cart_cross_icon.png';
export const Cartitems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} =useContext(ShopContext)
  return (
    <div className='Cartitems'>
        <div className='cartitems-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        <div>
           
            {all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    return  <div className='cartitems-format cartitems-format-main'>
                    <img src={e.image} alt="" className='carticon-product-icon' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>
                        {cartItems[e.id]}
                    </button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img src={remove} className='removeicon' onClick={()=>{removeFromCart(e)}} alt=""/>
                <hr/>
                </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>cart Totals</h1>
                    <div className="cartitems-total-item">
                        <p>subtotal</p>
                        <p>${getTotalCartAmount}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>
                            Shipping fee
                        </p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
            
            </div>
            <div className="cartitems-promocode">
                <p>
                    If you have a promo code , Enter it here
                </p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder= "promo code"/>
                    <button>Submit</button>
                </div>
            </div>
            </div>
        
    </div>
  )
}
export default Cartitems;