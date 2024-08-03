import React from 'react';
import './components.css';
import { Link } from 'react-router-dom';
const Items = (props) => {
  console.log('id:', props.id);
    return (
        <div className='item'>
         <Link to={`/product/${props.id}`}> <img onClick={window.scroll(0,0)}src={props.image}  />
          </Link>
          <p>{[props.name]} </p>
        <div className='item-prices'>
            <div className='item-price-new'>
                  ${props.new_price}
                  
            </div>
            <div className='item-price-old'>
              ${props.old_price}
            </div>
        </div>
        </div>
    );
};

export default Items;