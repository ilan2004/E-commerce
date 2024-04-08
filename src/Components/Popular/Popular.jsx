import React from 'react'
import data_product from '../../Assets/data';
import './Popular.css'
import Item from '../Item/Item';
import EmblaCarousel from './EMBLA/js/EmblaCarousel';
import Corousel from './EMBLA/js';
 const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className='popular-item'>
            <Corousel/>
        </div>
    </div>
  )
}
export default Popular;
