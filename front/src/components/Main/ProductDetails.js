import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/reducers/cartSlice";
import axios from "axios";

import Modal from "react-bootstrap/Modal";


const ProductDetails = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

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
    dispatch(addProduct(product));
  };

  return (
    <div>

<button style={{border:"1px solid #6DAD9F"}} className="btn-shade mb-3" onClick={handleShow}>
        Add new product
      </button>

      <Modal show={show} onHide={handleClose}   size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
     
        <Modal.Body>
        <img src={product.img} alt={product.productName} style={{width:"600px"}} />
              
            
           

     
              
           
            <button variant="secondary" onClick={handleClose}>
              Close
            </button>
      
        </Modal.Body>
      </Modal>

    
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
          <button onClick={handleClick} className="btn-shade mt-2">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
