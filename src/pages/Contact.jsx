/*Veg Page */


import useState from "react";
//import { VEG } from "./filter/veg";

export function Coast() {
  return (
    <div className="shop">
      <div className="shopTitle">
      <h2>Burrito</h2>
      <h3>Recipe Here.</h3>
        <img src="Vegan1.png" alt="" />
        <h2>Peanut Chutney</h2>
        <h3>Recipe Here.</h3>
        <img src="Vegan2.png" alt="" />
        <h2>Pizza</h2>
        <h3>Recipe Here.</h3>
        <img src="Vegan3.png" alt="" />
      </div>

      <div className="coast">
        {/*{VEG.map((veg) => (*/}
          {/*<Veg key={veg.id} data={veg} />
        ))}*/}
      </div>
    </div>
  );
}