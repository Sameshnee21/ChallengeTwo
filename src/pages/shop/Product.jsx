import React from "react";
import { useContext } from "react";
import {Routes, Route, useParams} from "react-router-dom";
import { CartContext } from "../../content/CartContent";



function Product({ data }) {
  const { productImage, description, price, id, stops, duration, productName } = data;
  const { addToCart, cart } = useContext(CartContext);
  let itemQuantity = cart[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>{productName} ({duration})</p>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <p>Stops:{stops} </p>
        
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Purchase Ticket {itemQuantity > 0 && <>({itemQuantity})</>}
      </button>
    </div>
  );
}

export default Product;