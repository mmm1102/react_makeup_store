import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import {  toast } from "react-toastify";


const EditProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5500/products/find/" + id
        );
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProduct();
  }, [id]);



  const handleChange = (e) => {
    e.preventDefault();
    {
      const updateProduct = axios.patch(
        `http://localhost:5500/products/${id}`,
        product,
        { "Content-Type": "application/json" }
      );
      if (updateProduct) {
        toast.success("Product info successfully updated");
        navigate("/admin_dashboard");
      }
    }

   
  };

  return (
    <div className="content d-flex justify-content-sm-center">
      <div>
        <h3 className="mb-3">Edit product</h3>

        <div>
          <div>
            <div className="product-image-edit">
              <img src={product.img} alt={product.productName} />
            </div>
            <form onSubmit={handleChange}>
              <div className="mb-3 form-floating">
                <input
                  type="text"
                  name="productName"
                  className="form-control"
                  id="productName"
                  value={product.productName}
                  onChange={(e) =>
                    setProduct({ ...product, productName: e.target.value })
                  }
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
                  onChange={(e) =>
                    setProduct({ ...product, brand: e.target.value })
                  }
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
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                  }
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
                  onChange={(e) =>
                    setProduct({ ...product, price: e.target.value })
                  }
                />
                <label htmlFor="price">Price</label>
              </div>
              <button className="btn-shade mb-5" type="submit">
                Edit product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
