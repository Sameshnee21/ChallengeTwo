//Ecommerce skeleton used for challenge 2.

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Shop } from "./pages/shop/Shop";
import { Cart } from "./pages/cart/Cart"; //ticket purchase tab
//import { Contact } from "./pages/Contact";
import "./App.css";
import CartContextProvider from "./content/CartContent";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            {/*<Route path="/contact" element={<Contact />} />*/}
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;