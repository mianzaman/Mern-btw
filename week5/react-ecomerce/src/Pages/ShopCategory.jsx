import React ,{useContext} from 'react'
import './index.css'
import {ShopContext} from "../Context/ShopContext";
import dropdown from '../Components/Assets/dropdown_icon.png'
import Items from '../Components/Items';
const ShopCategory = (props) => {
  const {products} = useContext(ShopContext);
  return (
    <>
    <img className='banner' src={props.banner}  alt='' />
        <div className='shop-cat'>
          
        <div className='shopCat-indexSort'>
            <p>
              <span> Showing 1-12</span> out of 36 products
            </p>
            <div className='shopCat-sort'>
              Sort by: <img src={dropdown} />
            </div>
        </div>
        <div className='ShopCat-products'>
              {products.map((item , i) => {
                    if(props.category === item.category){
                    
                    return  <Items  key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                    }
                    else{
                      return null;
                    }
              } )}
        </div>
        <div className='explore-btn'>
          <button>Explore More</button>
        </div>
        </div>
    </>
  )
}

export default ShopCategory
