import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addProduct, incrementQuantity, decrementQuantity } from "../../redux/reducers/cartSlice";
import axios from "axios";

const ProductDetails = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const getProduct = async () => {
    try {
      const res = await axios.get("http://localhost:5500/products/find/" + id);
      setProduct(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };

  const handleDecrement = (_id) => {
    dispatch(decrementQuantity(_id));
  };

  const handleIncrement = (_id) => {
    dispatch(incrementQuantity(_id));
  };
console.log(product)
  return (
    <div>
      <div className="single_product_container">
        <img src={product.img} alt={product.productName} />
        <div className="product_desc">
          <h5 className="product_name">{product.productName}</h5>
          <p className="product_p">
            Brand: &nbsp;
            {product.brand}
          </p>
          <p className="product_p">Category: &nbsp;{product.category}</p>
          <p className="product_price">{product.price}$</p>
          <h4>
            <span onClick={() => handleDecrement(product._id)}>&minus;</span>
            {quantity}
            <span onClick={() => handleIncrement(product._id)}>+</span>
          </h4>

          <button onClick={handleClick} className=" btn btn-primary">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
