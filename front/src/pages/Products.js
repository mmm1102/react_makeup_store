import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/reducers/cartSlice";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { cartItems } = useSelector((state) => state.cart);
  const broj = cartItems.length;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("http://localhost:5500/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const item = { ...products };

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };
  return (
    <section className="py-5">
      <p>{broj}</p>
      <div className="container px-4 px-lg-5 mt-2">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((e) => {
            return (
              <div className="col mb-4">
                <div className="card h-100 text-truncate" key={e._id}>
                  <img
                    className="card-img-top w-75 mx-auto"
                    src={e.img}
                    alt={e.productName}
                  />
                  <div className="card-body p-0" key={e.id}>
                    <div className="text-center">
                      <h6 className="mt-2" key={e.id}>
                        {" "}
                        {e.productName}
                      </h6>
                    </div>
                    <p className="card-text mb-0" key={e.id}></p>
                    <p className="card-text mb-1" key={e.id}>
                      {e.brand}
                    </p>
                    <p className="card-text mb-1" key={e.id}>
                      {e.category}
                    </p>
                    <p className="card-text mb-1" key={e.id}>
                      {e.price}$
                    </p>
                    <div className="card-footer p-1 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <button
                          className="btn btn-primary mt-auto"
                          onClick={handleAddToCart}
                        >
                          {" "}
                          Add to cart
                        </button>
                        <button className="btn btn-outline-primary ms-1">
                          {" "}
                          <NavLink
                            className="nav-item nav-link"
                            to="/product_details"
                          >
                            Show more
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
  );
};

export default Products;
