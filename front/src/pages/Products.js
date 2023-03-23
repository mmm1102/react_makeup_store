import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {
  addToCart,
  removeFromCart
} from "../redux/reducers/cartSlice"
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const {cartItems} = useSelector((state)=> state.cart);
  const broj = cartItems.length;
  const dispatch= useDispatch();

 

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("http://localhost:5500/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);
  const item = {...products};

  const handleAddToCart = () => {
   
    dispatch(addToCart(item));
      }
  return (
    <div>
  <p>{broj}</p>
     
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
              <button className="btn btn-primary" onClick={handleAddToCart}> Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
