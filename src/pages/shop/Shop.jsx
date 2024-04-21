

import useState from "react";
import "./Shop.css";
import Product from "../shop/Product";
import { PRODUCTS } from "../../products";

export function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Public Transit Route Planner</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}