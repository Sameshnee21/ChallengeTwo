import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";


export function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to={"/"}>Available Routes</Link> {/*Homepage */}
        <Link to={"/.ticketInfo"}>Route Info</Link>
        <Link to={"/cart"}>
          <ShoppingCart size={32} /> {/*ticket purchase */}
        </Link>
        {/*<Link to={"/contact"}>Contact</Link>*/}
      </div>
    </div>
  );
}