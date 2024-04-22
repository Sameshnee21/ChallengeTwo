//Ecommerce skeleton used for challenge 2.

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Shop } from "./pages/shop/Shop";
import { Cart } from "./pages/cart/Cart"; //ticket purchase tab
//import { Contact } from "./pages/Contact";
import products from "./products";
import "./App.css";
import CartContextProvider from "./content/CartContent";
import Product from "./pages/shop/Product";
import Coast from "../src/pages/Coast";


//Failed attemp of useParams
//React Router: A Beginners guide to useParams hook Tutorial used as a guide.
//import ImageInfo from "./components/ImageInfo";
//import ImageComponent from "./components/ImageComponent";
//import product1 from "./assets/products/1.png";
//import product2 from "./assets/products/2.png";
//import product3 from "./assets/products/3.png";
//import product4 from "./assets/products/4.png";



function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
          {/*<Route path="/" element= < ImageComponent data={imageData} /> />
          <Route path="/info/:name" element=< ImageInfo data={imageData} /> />*/}

            <Route path="/" element={<Shop />} />
            <Route path= "/ticketInfo" element={<Product/>}/>
            <Route path="/cart" element={<Cart />} />
            
    

            {/*<Route path="/contact" element={<Contact />} />*/}
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;