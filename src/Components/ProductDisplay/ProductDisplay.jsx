import React, { useContext } from 'react'
import starfull from '../../Assets/star_icon.png';
import star from '../../Assets/star_dull_icon.png';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className="productdisplay">
        <div className="productdisplayleft">
            <div className="productdisplay-img-list">
                <img className='mini' src={product.image} alt="" />
                <img className='mini' src={product.image} alt="" />
                <img className='mini' src={product.image} alt="" />
                <img className='mini' src={product.image} alt="" />  
            </div>
            <div className='productdisplay-img'>
            <img className="main-image" src={product.image} alt="" />
        </div>
        </div>
        <div className="productdisplayright">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={starfull} alt="" />
                <img src={starfull} alt="" />
                <img src={starfull} alt="" />
                <img src={starfull} alt="" />
                <img src={star} alt="" />
                <p>(122)</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-new">
                ${product.new_price}
                </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, neque et nihil a obcaecati, quae quia quos facere itaque veritatis natus cupiditate nisi odio tenetur aut dicta ipsa molestiae ut.
                Inventore dolorum nemo unde, soluta quaerat consequatur quia ratione! Voluptates inventore consequuntur maiores quisquam et distinctio porro magni qui eius impedit perspiciatis rem atque a blanditiis pariatur, assumenda voluptate repellat.
                Sunt inventore ad veritatis deserunt culpa quos blanditiis alias temporibus, cum, vero sint. Repudiandae illum itaque distinctio earum repellat corrupti consequuntur quisquam maiores est, corporis consequatur, rem, velit nam. Ipsa?
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}} className='add-to-cart'>ADD TO CART</button>
            <p className='productdisplay-right-category'>
                <span>Category :</span>New item </p>
                <p className='productdisplay-right-category'>
                <span>Tags :</span>Modern, latest</p>     
            </div>
            </div>
    </div>
  )
}
export default ProductDisplay;