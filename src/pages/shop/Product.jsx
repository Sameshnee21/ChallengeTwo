import React from "react";
import { useContext } from "react";
import {Routes, Route, Link} from "react-router-dom";
import { CartContext } from "../../content/CartContent";
import {Coast} from "../../pages/Coast";
import {Suburb} from "../../pages/Suburb";
import {Night} from "../../pages/Night";
import {Downtown} from "../../pages/Downtown";



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

        
        <Link to= {productName}>
        <button className="Info"> More Info</button>
        </Link>
        <Routes>
        <Route path={productName} element={productName} />
      </Routes>

    
        
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Purchase Ticket {itemQuantity > 0 && <>({itemQuantity})</>}
      </button>
    </div>
  );
}

export default Product;