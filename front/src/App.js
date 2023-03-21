import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import React from "react";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content d-flex justify-content-md-center">
        <Routes>
       
       
     
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/admin_dashboard" element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        
        </Routes>
        </div>
        {/* <Main /> */}
        <Footer />
       
      </div>
    </BrowserRouter>
  );
}

export default App;
