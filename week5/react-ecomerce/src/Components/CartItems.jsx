import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import removeIcon from "./Assets/cart_cross_icon.png";
import "./components.css";
import { useNavigate } from 'react-router-dom';
const cartItems = () => {
  const navigate = useNavigate();
  const { cartItems, removeFormCart, products , getTotalAmount } = useContext(ShopContext);
  let total = getTotalAmount();
  return (
    <>
      <div className="carItems">
        <div className="cartItems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
      </div>
      {products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div className="carItems" key={e.id}  >
              <div className="cartItems-format cartItems-format-main">
                <img src={e.image} className="cart-icon" alt="product" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartItems-quantity">
                  {cartItems[e.id]}{" "}
                </button>
                <p>${e.new_price * cartItems[e.id]} </p>
                <img className="removeIcon"
                  src={removeIcon}
                  onClick={() => {
                    removeFormCart(e.id);
                  }}
                  alt="remove product"
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="cartItems-down">
        <div className="cartItems-total">
          <h1> Cart Totals</h1>
          <div className="cartItems-total-item">
            <p>Subtotal</p>
            <p>${getTotalAmount()}</p>
          </div>
          <hr/>
          <div className="cartItems-total-item">
            <p>Shipping Free</p>
            <p>Free</p>
          </div>
          <hr/>
          <div className="cartItems-total-item">
            <h3>Total</h3>
            <h3>${getTotalAmount()}</h3>
          </div>
         
            {/* <button onClick={() => navigate('/Checkout')}>Proceed to Checkout</button>
           if (getTotalAmount )  {
            <button onClick={() => navigate('/Checkout')}>Proceed to Checkout</button>  
            } else {<p>No Items </p> } */}
            {total > 0 ? (
            <button onClick={() => navigate('/Checkout')}>Proceed to Checkout</button>
          ) : (
            <p>No items in the cart</p>
           
          )}
        </div>
      </div>
    </>
  );
};

export default cartItems;
