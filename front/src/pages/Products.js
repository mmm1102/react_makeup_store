import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("http://localhost:5500/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
     
      {products.map((e) => {
        return (
          <div className="card product_render">
            <img
              className="card-img-top"
              key={e.id}
              src={e.img}
              alt={e.productName}
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text" key={e.id}>
                {e.productName}
              </p>
              <p className="card-text" key={e.id}>{e.brand}</p>
              <p className="card-text" key={e.id}>{e.price}$</p>
              <button className="btn btn-primary"> Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
