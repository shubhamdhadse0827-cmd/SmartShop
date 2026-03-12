import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./assets/men_banner.mp4";
import women_banner from "./assets/women_banner.mp4";
import kids_banner from "./assets/kids_banner.mp4";
import ShopContextProvider from "./Context/ShopContext";

function App() {

  return (
    <ShopContextProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />

          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />

          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />

          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kids" />} />

          <Route path="/product/:productID" element={<Product />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/loginSignup" element={<LoginSignup />} />

        </Routes>

        <Footer />

      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;