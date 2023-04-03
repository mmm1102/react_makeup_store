import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import FileBase from "react-file-base64";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../validation/addProductValidation";

const AddNewProduct = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [productName, setProductName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState();

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage(base64);
  };

  const postProduct = async () => {
    const data = {
      productName: productName,
      brand: brand,
      category: category,
      price: price,
      img: image,
    };

    try {
      const response = await axios.post(
        "http://localhost:5500/products/upload_product",
        data
      );
      toast.success("Product added to database");
   handleClose()
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
    console.log(data);
  };

  return (
    <>
      <button style={{border:"1px solid #6DAD9F"}} className="btn-shade mb-3" onClick={handleShow}>
        Add new product
      </button>

      <Modal show={show} onHide={handleClose} style={{fontFamily:"Montserrat"}}>
        <Modal.Header closeButton>
          <Modal.Title>Add new product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="mb-3">
              <input
                onChange={(event) => {
                  setProductName(event.target.value);
                }}
                className="form-control"
                type="text"
                name="productName"
                placeholder="Product name"
              />
            </div>
            <div className="mb-3">
              <input
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
                className="form-control"
                type="text"
                name="brand"
                placeholder="brand"
              />
            </div>
            <div className="mb-3">
              <input
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
                className="form-control"
                type="text"
                name="category"
                placeholder="category"
              />
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
                type="text"
                name="price"
                placeholder="price"
              />
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                name="img"
                placeholder="img"
                type="file"
                onChange={(e) => handleFileUpload(e)}
              />
            </div>
            <button onClick={postProduct} className="btn-shade me-2">
              Save Changes
            </button>
            <button className="btn-shade" style={{backgroundColor:"transparent"}} onClick={handleClose}>
              Close
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddNewProduct;
