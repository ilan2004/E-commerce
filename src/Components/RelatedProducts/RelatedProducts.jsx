import React from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item'
import data_product from '../../Assets/data'
import Corousel from './EMBLA/js'
 const Relatedproducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <h1/>
        <div className="relatedproducts-item">
           <Corousel/>
        </div>
    </div>
  )
}
export default Relatedproducts;