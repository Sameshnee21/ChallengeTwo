import product1 from "./assets/products/1.png";
import product2 from "./assets/products/2.png";
import product3 from "./assets/products/3.png";
import product4 from "./assets/products/4.png";

//info of data.json transfered to products.js

export const PRODUCTS = [
  {
    id: 1,
    productName: "Downtown Express",
    description: "The quickest way to the heart of the city, with minimal stops.",
    stops: 5,
    duration: "25 mins",
    price: 245.5,
   
    productImage: product1,
  },
  {
    id: 2,
    productName: "Scenic Coastal Line",
    description: "Enjoy breathtaking views of the coastline as you travel.",
    stops: 8,
    duration: "55 mins",
    price: 255.75,
    
    productImage: product2,
  },
  {
    id: 3,
    productName: "Suburban Shuttle",
    description: "Connects the suburbs with downtown, running every half hour.",
    stops: 6,
    duration: "45 mins",
    price:  99.0,
    productImage: product3,
  },
  {
    id: 4,
    productName: "Night Owl",
    description: "Operates after midnight, serving all major nightlife districts.",
    stops: 4,
    duration: "30 mins",
    price: 56.65,
    productImage: product4,
  },

];
