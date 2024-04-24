import React, { useState, useContext } from 'react';
import { useParams } from "react-router";
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';
import all_product from '../../Assets/all_product';
const ProductDisplay = () => {
  const { addToCart } = useContext(ShopContext);
  const {productId} = useParams();
  const { id, name, image, category, new_price, old_price, description } = all_product.find(product => product.id === Number(productId));

  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [notify, setNotify] = useState(false);

  const showNotify = () => {
    setNotify(!notify);
  };

  return (
    <>
      <div
        onAnimationEnd={() => setNotify(false)}
        className={`notify ${notify ? "slide-in" : ""}`}
      >
        <p>Item has been added to the cart &nbsp; ✅</p>
      </div>

      <div className="product-page-div">
        <div className="container-2">
          <div className="product-div">
           
            <div className="product-left">
              <div className="big-img">
                <img src={image} alt="product" />
              </div>
              <div className="small-imgs">
              <img src={image} alt="product" />
              </div>
            </div>
            <div className="product-right">
            <h3 className="product-big-name">{name}</h3>
              <div className="product-quant">
                <p>Quantity</p>
                <div className="product-btns">
                  <button onClick={decrease}>-</button>
                  <p className="quantity">{quantity}</p>
                  <button onClick={increase}>+</button>
                </div>
                <p className="product-price">${new_price}</p>
              </div>
              <div className="atc-buy">
                <button
                  onClick={() => {
                    addToCart(id);
                    showNotify();
                  }}
                  className="atc-btn"
                >
                  add to cart
                </button>
                <button className="buy-btn">buy now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
