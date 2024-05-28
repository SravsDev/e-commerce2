import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import Shopcategory from "./Pages/Shopcategory";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer"
import men_banner from "./Components/Assets/men_banner.png"
import women_banner from "./Components/Assets/women_banner.png"
import kids_banner from "./Components/Assets/kids_banner.png"


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route   path="/" element={<Shop/>}/>
      <Route   path="/Mens" element={<Shopcategory  banner={men_banner} category="mens"/>}/>
      <Route   path="/Womens" element={<Shopcategory  banner={women_banner}category="womens"/>}/>
      <Route   path="/Kids" element={<Shopcategory   banner={kids_banner}category="kids"/>}/>
      <Route   path="/Cart" element={<Cart/>}/>
      <Route   path="/Signup" element={<Signup/>}/>
      <Route   path="/Signin" element={<Signin/>}/>
      <Route   path="/Product" element={<Product/>}>
        <Route  path=":ProductId" element={< Product/>}/>
        </Route>


    </Routes>
    <Footer />
    </BrowserRouter>
   
    </>
  )
}

export default App