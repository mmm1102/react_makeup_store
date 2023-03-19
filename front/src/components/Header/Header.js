import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="col-md-12">
      <p className="shipping_info p-1 mb-2 bg-info text-white">Free shipping on all orders over $50 </p>
      <div className="logo_search_bar row ">
        <Logo />
        <SearchBar />
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
