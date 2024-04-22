import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import {Routes, Route, Link} from "react-router-dom";
import { CartContext } from "../../content/CartContent";
import {Suburb} from "../../pages/Suburb";
import {Downtown} from "../../pages/Downtown";
import {Coast} from "../../pages/Coast";
import {Night} from "../../pages/Night";
import { useParams } from "react-router-dom";



function Product({ data }) {
  const { productImage, description, price, id, stops, duration, productName } = data;
  const { addToCart, cart } = useContext(CartContext);
  let itemQuantity = cart[id];
  const [image, setImage] = useState();
  let {info} = useParams();

  useEffect(()=>{
    fetch('data.json' + info)
    .then ((response) => response.json())
    .then((data)=> {
      setImage(data[0].description);
      console.log(data[0].description);
    })
  })

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>{productName} ({duration})</p>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <p>Stops:{stops} </p>

        {/*URL */}
        <Link to= {productName}><button className="Info"> More Info</button></Link>
        <Routes>
        <Route path={productName} element={<productName/>} />
       
      </Routes>

    
        
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Purchase Ticket {itemQuantity > 0 && <>({itemQuantity})</>}
      </button>
    </div>
  );
}

export default Product;