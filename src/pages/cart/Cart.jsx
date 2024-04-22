/* Shopping Cart Page */

import React from "react";

import {Link,Routes, Route, useNavigate,} from 'react-router-dom'; //useNavigate test from bobbyhadz tutorial

import "./Cart.css";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../../content/CartContent";
import { PRODUCTS } from "../../products";

function handleClick() { //Checkout button test
  alert('Checked out successful!');
}

export function Cart() {
  const navigate = useNavigate();

  const { cart, getTotalAmount } = useContext(CartContext);
  let total = getTotalAmount();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cart[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>

      {total > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${total}</p>
          <button onClick={handleClick} onClick={()=> navigate(-1)}>Checkout</button> {/* button to process tickets, needs to give a message that payment was successful*/}
          <button onClick={() => navigate(-1)}>Continue Shopping</button> {/*back button to home page here  */}
        </div>
      ) : (
        <div className="checkout">
          <h4>Your Cart is Empty.</h4>
          <button>Continue shopping</button>
        </div>
      )}
    </div>
  );
}