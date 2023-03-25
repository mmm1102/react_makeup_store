import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  console.log(id);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:5500/products/${id}`);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [id]);

  return (
    <div>
      {products.map((e) => {
        return (
          <div className="card product_render" key={e.id}>
            <img
              className="card-img-top"
              key={e.id}
              src={e.img}
              alt={e.productName}
            />
            <div className="card-body" key={e.id}>
              <h5 className="card-title" key={e.id}>
                Card title
              </h5>
              <p className="card-text" key={e.id}>
                {e.productName}
              </p>
              <p className="card-text" key={e.id}>
                {e.brand}
              </p>
              <p className="card-text" key={e.id}>
                {e.price}$
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDetails;
