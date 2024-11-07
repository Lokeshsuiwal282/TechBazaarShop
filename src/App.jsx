import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header_Navigation from './components/header/header'
import Footer from '../src/components/footer/footer'
import Home from './pages/Home/index';
import About from './pages/About/index';
import ListingPage from './pages/ListingPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import '../src/assets/CSS/bootstrap.min.css';
import '../src/assets/CSS/font-awesome.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart_Products from './pages/Cart-Product/cartProduct';
import Shop_Wishlist_Products from './pages/Shop-wishlist/shop-wishlist';
import ProfileAccounts from './pages/Profile-Account/profile-account';
import Login from './pages/Login-Page/login';

function App() {
  const [count, setCount] = useState(0)

    return (
      <>
        <BrowserRouter>
          <Header_Navigation />
          <Routes>
            <Route exact={true} path='/' element={<Home/>} />
            <Route exact={true} path='/about' element={<About/>} />
            <Route exact={true} path='/listing-Page' element={<ListingPage/>} />
            <Route exact={true} path='/listing-Page/product-details' element={<ProductDetails/>} />
            <Route exact={true} path='/listing-Page/product-details/cart-products' element={<Cart_Products/>} />
            <Route exact={true} path='/listing-Page/Shop-Wishlist-90sf3-Producth3lsc' element={<Shop_Wishlist_Products/>} />
            <Route exact={true} path='/Acount-Profile-90sf3accountprofile53bdc__45_-000-Profile' element={<ProfileAccounts/>} />
            <Route exact={true} path='/Account_9df4-32vbe/Login-page' element={<Login/>} />
            <Route exact={true} path='*' element={<PageNotFound/>} />
          </Routes>

          {/* Footer Start Section  */}
            <Footer />
          {/* Footer Ent Section  */}
        </BrowserRouter>
      </>
    )
  }

export default App;


