import React, { createContext, useState } from "react";
import products from "../Components/Assets/all_product.js";
export const ShopContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < products.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // console.log(cartItems);
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    let total = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find(
          (products) => products.id === Number(item)
        );
        total += itemInfo.new_price * cartItems[item];
      }
    }
    return total;
  };
  const totalCartItems = () => {
    let total = 0;
    for (const item in cartItems) {
      total += cartItems[item];
    }
    return total;
  };

  const ContextValue = {
    products,
    getTotalAmount,
    cartItems,
    addToCart,
    removeFromCart,
    totalCartItems
  };
  //  console.log(cartItems);
  return (
    <>
      <ShopContext.Provider value={ContextValue}>
        {props.children}
      </ShopContext.Provider>
    </>
  );
};

export default ShopProvider;

// const ContextValue = {
//   products: products,
//   cartItems: cartItems,
//   addToCart: addToCart,
//   removeFromCart: removeFromCart,
// };
