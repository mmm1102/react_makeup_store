import React from "react";
import Loader from "../components/Loader";

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";
import Pagination from "../components/Pagination";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [reload, setReload] = useState(true);
  const [state, setState] = useState([]);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
 

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("http://localhost:5500/products");
      setProducts(res.data);
      setReload(false);
    };
    fetchProducts();
  }, []);

  const onSearchChange = (e) => {
    const kopija = [...products]
    setSearchTerm(e.target.value);
    setState(kopija);
  };


  const onSelectionChange = (e) => {
    const sortDirection = e.target.value;
    const copyArray = [...products];

    copyArray.sort((a, b) => {
      return sortDirection === "0" ? a.price - b.price : b.price - a.price;
    });
    setProducts(copyArray);
  };
  if (reload) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div
        className="container col-md-6 d-flex align-items-center justify-content-sm-center
        justify-content-md-center 
        justify-content-lg-center"
      >
        <div className="input-group me-3">
          <input
            onChange={onSearchChange}
            type="text"
            className="form-control"
            placeholder="Search product..."
            value={searchTerm}
          />
        </div>

        <div className="input-group">
          <span
            style={{ backgroundColor: "#CFFAF0" }}
            className="input-group-text"
            id="basic-addon1"
          >
            Sort by price
          </span>
          <select
            onChange={onSelectionChange}
            className="form-select w-25"
            id="sort"
          >
            <option defaultValue>Sort</option>
            <option value={0}>Low to high</option>
            <option value={1}>High to low</option>
          </select>
        </div>
      </div>

      <div className="content">
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-2">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-xxl-4">
              {products.filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.productName.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  } else if (
                    val.brand.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  } else if (
                    val.category.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .slice(firstProductIndex, lastProductIndex)
                .map((val, key) => {
                  return (
                    <div className="col mb-4" key={val._id}>
                      <div className="card h-100 text-truncate">
                        <NavLink
                          className="nav-item nav-link"
                          to={`/product/${val._id}`}
                        >
                          <img
                            className="card-img-top w-75 mx-auto"
                            src={val.img}
                            alt={val.productName}
                          />
                        </NavLink>

                        <div className="card-body p-0">
                          <div className="text-center">
                            <p className="mt-2"> {val.productName}</p>
                          </div>
                          <p className="card-text mb-1 brand-p">{val.brand}</p>
                          <p className="card-text mb-1 category-p">
                            {val.category}
                          </p>
                          <p className="card-text mb-1 price-p">{val.price}$</p>
                          <div className="card-footer p-1 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                              <button className="btn-shade-small ms-1 mb-1 btn-sm">
                                {" "}
                                <NavLink
                                  className="nav-item nav-link"
                                  to={`/product/${val._id}`}
                                >
                                  View product{" "}
                                </NavLink>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
      <Pagination
        totalProducts={products.length}
        productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
      ></Pagination>
    </div>
  );
};

export default Products;
