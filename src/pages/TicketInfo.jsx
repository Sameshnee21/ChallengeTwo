

import useState from "react";
import "./Shop.css";
import Product from "../shop/Product";
import { PRODUCTS } from "../../products";




export function TicketInfo() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Information Desk</h1>
      </div>

     <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
    </div>
    </div>
  );
}