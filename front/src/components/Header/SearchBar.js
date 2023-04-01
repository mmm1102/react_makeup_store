import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const SearchBar = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("http://localhost:5500/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="col-md-6 d-flex align-items-center justify-content-sm-center">
    <div className="input-group w-50">
      <input onChange={event => {setSearchTerm(event.target.value)}} type="text" className="form-control" placeholder="Search product..." />
      <button className="btn btn-outline-primary">
      <NavLink className="nav-item nav-link" to="/search">
                Search
              </NavLink>
          </button>
    </div>
    </div>
  );
};

export default SearchBar;
