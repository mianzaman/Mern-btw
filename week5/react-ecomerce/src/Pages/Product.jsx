import React,{useContext} from 'react'
import './index.css'
import BreadCrums from '../Components/Breadcrum';
import {ShopContext} from "../Context/ShopContext";
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/productDisplay';
import RelatedProduct from '../Components/RelatedProducts';
const Product = () => {
  const {products} = useContext(ShopContext);
  const {productId} = useParams();
   const product = products.find((e) => e.id === Number(productId));
   console.log(product);
  
   return (
    <>
            <div className='productPage'>
            <BreadCrums className="BreadCrums" products= {product}  />
            <ProductDisplay products= {product} />
            <RelatedProduct  products= {product} />
            </div>
     </>
  )
}

export default Product
