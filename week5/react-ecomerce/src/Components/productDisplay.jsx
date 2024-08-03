import React, { useContext } from "react";
import "./components.css";
import star from "./Assets/star_icon.png";
import star_dull from "./Assets/star_dull_icon.png";
import { ShopContext } from "../Context/ShopContext";
const ProductDisplay = (props) => {
  const { products } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <>
      <div className="ProductDisplay">
        <div className="displayLeft">
          <div className="img-list">
            <img src={products.image} alt={products.name} />
            <img src={products.image} alt={products.name} />
            <img src={products.image} alt={products.name} />
          </div>
          <div className="img-main">
            <img src={products.image} alt={products.name} />
          </div>
        </div>
        <div className="displayRight">
          <h1>{products.name}</h1>
          <div className="star">
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star_dull} />
          </div>
          <div className="pd-desc">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              explicabo totam reiciendis iure iste fugit quasi ullam magnam
              quaerat debitis. Pariatur, ullam? Minus aut provident est libero
              quisquam rerum odit.
            </span>
          </div>
          <div className="productPrice">
            <h3 className="old_price">${products.old_price}</h3>
            <h3 className="new_price">${products.new_price}</h3>
          </div>
          <p>{products.description}</p>
          <div className="sizes">
            <h3>Select Size</h3>
            <div className="size-btn">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
            </div>
          </div>
          <div className="pd-btn">
            <button onClick={ ()=>{addToCart(products.id)} } >
          Add to Cart
            </button>
          </div>
          <div className="product-tags-cat">
            <p className="dis-Cate">
              <span className="cate">
                <strong>Category : &nbsp; </strong> 
                 {products.category}
              </span>
            </p>
            <p className="dis-tag">
              <span className="tag"><strong>Tag : &nbsp; </strong> Modern, Casual, Trendy</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
