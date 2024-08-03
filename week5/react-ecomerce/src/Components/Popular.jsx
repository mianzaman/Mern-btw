import React from 'react'
import data_product from './Assets/data'
import Items from './Items' 

import './components.css'

const Popular = () => {
  return (
    <>
      <div className='popular'>
        <h1>Popular In Women</h1>
        <hr/>
        <div className='popular-item'>
            {data_product.map((item,i) => {
                return <Items key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
      </div>
    </>
  )
}

export default Popular
