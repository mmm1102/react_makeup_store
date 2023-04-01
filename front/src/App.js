import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import MyProfile from "./pages/MyProfile";
import ProductDetails from "./components/Main/ProductDetails";
import EditProduct from "./pages/admin/EditProduct"
import Search from "./components/Header/Search";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import React from "react";
import AdminDashboard from "./pages/admin/AdminDashboard";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer />
        <div className="">
        <Routes>
       
       
     
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/admin_dashboard" element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/my_profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="/product/:id" element={<ProductDetails></ProductDetails>}></Route>
          <Route path="/edit_product/:id" element={<EditProduct></EditProduct>}></Route>
          <Route path="/search" element={<Search></Search>}></Route>
        </Routes>
        </div>
        {/* <Main /> */}
        <Footer />
       
      </div>
    </BrowserRouter>
  );
}

export default App;
