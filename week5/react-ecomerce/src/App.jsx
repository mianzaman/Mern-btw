import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Nav/header';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import LoginSignup from './Pages/LoginSignup';
import LoginSignin from './Pages/LoginSignin';
import Footer from './Components/Footer';
import mens from './Components/Assets/banner_mens.png';
import women from './Components/Assets/banner_women.png';
import kid from './Components/Assets/banner_kids.png';
import ShopProvider from './Context/ShopContext';
import Checkout from './Pages/Checkout';


function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={mens} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid} category="kid" />} />
          <Route path="/product">
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<LoginSignup />} />
          <Route path="/" element={<LoginSignin />} />  // Ensure the casing matches the actual file name
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<LoginSignin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;