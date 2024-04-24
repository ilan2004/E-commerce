import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom';
 const Item = (props) => {
  return (
    <div className="full">
    <article class="card">
       
        <div class="container">
                <div class='card-background'>
                <Link to={`/product/${props.id}`}>   <img onClick={window.scrollTo(0,0)} className='item-img' src={props.image} alt= ""/>
                </Link>
                </div>
                <div class='content'>
                    <p>{props.name}</p>
                    <div className='item-prices'>
                    <div className='item-price-new'>
                        {props.new_price}
                    </div>
                <div className='item-price-old'>
                        {props.old_price}
                </div>
                    </div>
                </div>
                </div>
                <Link to={`/product/${props.id}`}>
                <div onClick={window.scrollTo(0,0)} class="action-bottom-bar">
                    <a className='Buyn' href="#">
                        BUY NOW
                        <svg xmlns="http://www.w3.org/2000/svg" class="chevron" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 6l6 6l-6 6"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="arrow" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l14 0"></path>
                            <path d="M15 16l4 -4"></path>
                            <path d="M15 8l4 4"></path>
                        </svg>
                    </a>
                    
                </div>

                </Link>
                
                </article>
                </div>
  )
}
export default Item;