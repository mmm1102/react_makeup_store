import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


const Search = ([products, setProducts]) => {


  return (
    <div className="content d-flex justify-content-sm-center">
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-2">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((val, key) => {
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
                      <p className="card-text mb-1 category-p">{val.category}</p>
                      <p className="card-text mb-1 price-p">{val.price}$</p>
                      <div className="card-footer p-1 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <button className="btn btn-outline-primary ms-1 mb-1 btn-sm">
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
  );
};

export default Search;
