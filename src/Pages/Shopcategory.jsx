import React, { useContext } from 'react'
import './CSS/ShopCategory.css';
import Item from '../Components/Item/Item';
import { ShopContext } from '../Context/ShopContext';
import drop from '../Assets/dropdown_icon.png';

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className= 'shop-category'>
        <img src= {props.banner} alt=""/>
        <div className="shopcategory-indexSort">
            <p>
                <span className='showing'>Showing 1-12</span> out of 36 products
            </p>
            <div className="shopcategory-sort">
                Sort by <img className='droppedx`' src={drop} alt=''/>
            </div>
        </div>
        <div className='shopcategory-products'>
            <div className="allitems">
            {all_product.map((item,i)=>{
                if(props.category===item.category){
                    return <Item key={i} id={item.id} names={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                }
                else{
                   return null;
                }
            })}
        </div>
        </div>
        <div className="shopcategory-loadmore">
          EXPLORE MORE
        </div>
    </div>
  )
}
export default ShopCategory;