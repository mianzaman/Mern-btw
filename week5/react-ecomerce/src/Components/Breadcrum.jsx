import React from 'react'
import arrow from "../Components/Assets/breadcrum_arrow.png"
const BreadCrums = (props) => {
    const {products} = props;
      if (!products || !products.category) {
    return null; // Return null if data is undefined or incomplete
  }
  return (
    <>
       <div className='breadcrum'>
        Home  <img src={arrow}/> Shop <img src={arrow}/> 
        {products.category} <img src={arrow}/> {products.name}
       </div>
    </>
  )
}
export default BreadCrums;

