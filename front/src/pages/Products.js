import React from "react";
import Loader from "../components/Loader";

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [reload, setReload] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("http://localhost:5500/products");
      setProducts(res.data);
      setReload(false);
    };
    fetchProducts();
  }, []);

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
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Search product..."
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
            <option value={0} selected>
              Low to high
            </option>
            <option value={1}>High to low</option>
          </select>
        </div>
      </div>

      <div className="content d-flex justify-content-sm-center">
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-2">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {products
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.productName
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val, key) => {
                  return (
                    <div className="col mb-4" key={val._id}>
                      <div className="card h-100 text-truncate">
                        <img
                          className="card-img-top w-75 mx-auto"
                          src={val.img}
                          alt={val.productName}
                        />
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
    </div>
  );
};

export default Products;
