import React from "react";
import { useContext } from "react";
import { CartContext } from "../../content/CartContent";

function CartItem({ data }) {
  const { productName, id, price, productImage } = data;
  const { removeFromCart, addToCart, updateCart, cart } =
    useContext(CartContext);

  let itemQuantity = cart[id];

  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="description">
        <p>{productName}</p>
        <p>Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            type="text"
            value={itemQuantity}
            onChange={(e) => updateCart(id, Number(e.target.value))}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;