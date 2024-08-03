import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Items from "./Items";
import dataRelated from "./Assets/data"; 
import "./components.css";
const RelatedProduct = () => {
    const { all_product, currentCategory } = useContext(ShopContext);
  return (
    <div className="relatedProducts">
      <h1>Related Products</h1>
      <hr/>
    <div className="related-products-item">
      {dataRelated.map((item,i) => {
        return  <Items
          key={i}
          id={item.id}
          image={item.image}
          name={item.name}
          new_price={item.new_price}
          old_price={item.old_price}
        />
      })}
    </div>
    </div>
  );
};

export default RelatedProduct;
