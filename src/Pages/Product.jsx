import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Breadcrumses from '../Components/Breadcrums/Breadcrums';
import Description from '../Components/Description/Description';
// import all_product from '../Assets/all_product';
// import Newsletter from '../Components/Newsletter/Newsletter';
import Relatedproducts from '../Components/RelatedProducts/RelatedProducts';
 const Product = () => {
    const{all_product}= useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
        <Breadcrumses product={product}/>
         <ProductDisplay product={product}/>
        <Description/>
        <Relatedproducts/> 
    </div>
  )
}
export default Product;
