import React from "react";
import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const CartContext = createContext();

function makeDefaultCart() {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

function CartContextProvider(props) {
  const [cart, setCart] = useState(makeDefaultCart());

  function addToCart(id) {
    setCart({ ...cart, [id]: cart[id] + 1 });
  }
  function removeFromCart(id) {
    setCart({ ...cart, [id]: cart[id] - 1 });
  }
  function updateCart(id, amount) {
    setCart({ ...cart, [id]: amount });
  }
  function getTotalAmount() {
    let totalAmount = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        let prodInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount = totalAmount + prodInfo.price * cart[item];
      }
    }
    return totalAmount;
  }
  function checkout() {
    setCart(makeDefaultCart());
  }

  const contextValues = {
    addToCart,
    removeFromCart,
    updateCart,
    getTotalAmount,
    checkout,
    cart,
  };

  return (
    <div>
      <CartContext.Provider value={contextValues}>
        {props.children}
      </CartContext.Provider>
    </div>
  );
}

export default CartContextProvider;