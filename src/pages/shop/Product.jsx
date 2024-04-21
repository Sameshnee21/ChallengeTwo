/*Products Shopping Page */

import useState from "react";
import "./Shop.css";
import product from "../shop/Product";
import { PRODUCTS } from "../../products";

export function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Synth Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}