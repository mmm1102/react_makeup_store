import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  removeProduct,
  incrementQuantity,
  decrementQuantity,
} from "../redux/reducers/cartSlice";
import CartItem from "../components/Main/CartItem";

const Cart = () => {
  

  if (selectCart.quantity === 0) {
    return <h2 className="no-items">No items in cart...</h2>;
  }

  return (
    <div>
      <h3>Cart</h3>
      <p>Total: {}$ </p>
    </div>
  );
};

export default Cart;
