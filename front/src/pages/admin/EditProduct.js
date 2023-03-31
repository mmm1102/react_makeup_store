import { useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

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

  return(
    <div className="content d-flex justify-content-sm-center">
    <div>
      <h3 className="mb-3">Edit product</h3>
     
      <div>
        <div>
        <div className="product-image-edit"><img src={product.img}/></div>
          <form>
            <div className="mb-3 form-floating">
            
            
              <input
                type="text"
                name="productName"
                className="form-control"
                id="productName"
               
                value={product.productName}
                // onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
              <label htmlFor="username">Product name</label>
            </div>

            <div className="mb-3 form-floating">
              <input
                type="text"
                name="brand"
                className="form-control"
                id="brand"
             
                value={product.brand}
                // onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <label htmlFor="brand">Brand</label>
            </div>
            <div className="mb-3 form-floating">
              <input
                type="text"
                name="category"
                className="form-control"
                id="category"
               
                value={product.category}
                // onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <label htmlFor="category">Category</label>
            </div>
            <div className="mb-3 form-floating">
            
            
            <input
              type="number"
              name="price"
              className="form-control"
              id="price"
             
              value={product.price}
              // onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <label htmlFor="price">Price</label>
          </div>
            <button className="btn btn-primary mb-5" type="submit">
              Edit product
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default EditProduct;