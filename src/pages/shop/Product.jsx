import React from "react";
import { useContext } from "react";
import {Routes, Route, Link} from "react-router-dom";
import { CartContext } from "../../content/CartContent";
import {Coast} from "../../pages/Coast";



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

        
        <Link to="/coast">
        <button className="Info"> More Info</button>
        </Link>
        <Routes>
        <Route path="/coast" element={<Coast />} />
      </Routes>
        
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Purchase Ticket {itemQuantity > 0 && <>({itemQuantity})</>}
      </button>
    </div>
  );
}

export default Product;