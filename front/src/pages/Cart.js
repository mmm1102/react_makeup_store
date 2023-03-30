import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  removeProduct,
  incrementQuantity,
  decrementQuantity,
} from "../redux/reducers/cartSlice";
import CartItem from "../components/Main/CartItem";
import { createSelector } from "@reduxjs/toolkit";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart.quantity);

  let total = cart.total;

  if (cart.quantity === 0) {
    return <h2 className="no-items">No items in cart...</h2>;
  }

  return (
    <div>
      <h3>Cart</h3>
      <p>Total: {total}$ </p>
    </div>
  );
};

export default Cart;
