import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="col-md-12">
      <p className="shipping_info p-1 mb-2">
        Free shipping on all orders over $50{" "}
      </p>
      <div className=" container d-flex justify-content-around align-items-center">
        <Logo />
        <h1 id="store-title">Make<span className="title-shade" style={{color:"#F5CFC3"}}>up</span> Store</h1>
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
