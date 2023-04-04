import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import AddNewProduct from "./AddNewProduct";
import Loader from "../../components/Loader";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("http://localhost:5500/products");
      setProducts(res.data);
      setReload(false);
    };
    fetchProducts();
  });

  const removeProduct = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5500/products/${id}`
      );
      console.log(response.data);
      toast.success("Product removed");
    } catch (err) {
      console.log(err);
    }
  };

  if (reload) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <h5 style={{ color: "#6DAD9F", marginTop: "2rem" }}>
        All products in store
      </h5>
      <AddNewProduct></AddNewProduct>
      {products.map((e) => {
        return (
          <table className="products_table" key={e._id}>
            <tbody>
              <tr>
                <td className="td_id" key={e.id}>
                  {e._id}
                </td>

                <td className="td_img" key={e.id}>
                  <img src={e.img} alt={e.productName} />
                </td>
                <td className="td_name" key={e.id}>
                  {e.productName}
                </td>
                <td className="td_info" key={e.id}>
                  {e.brand}
                </td>
                <td className="td_category" key={e.id}>
                  {e.category}
                </td>
                <td className="td_price" key={e.id}>
                  {e.price} $
                </td>
                <td className="td_btns" key={e.id}>
                  {" "}
                  <NavLink to={`/edit_product/${e._id}`}>
                    {" "}
                    <Button variant="outline-warning" className="ms-3">
                      Edit
                    </Button>{" "}
                  </NavLink>
                </td>
                <td className="td_btns" key={e.id}>
                  {" "}
                  <Button
                    onClick={() => removeProduct(e._id)}
                    variant="outline-danger"
                    className="ms-2"
                  >
                    Remove
                  </Button>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default AdminProducts;
