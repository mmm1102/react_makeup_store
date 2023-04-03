import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/Main/CartItem";

const Cart = () => {
  const { products, quantity, total } = useSelector((state) => state.cart);

  // const cart = useSelector((state) => state.cart);

  // console.log(cart.quantity);
  // console.log(cart.products);

  if (quantity === 0) {
    return (
      <>
        <h2 className="no-items">No items in cart...</h2>
        <NavLink
          style={{ fontSize: "1.2rem", color: "#6DAD9F" }}
          to="/products"
        >
          Go to products
        </NavLink>
      </>
    );
  }

  return (
    <div>
      <h3>Cart</h3>
      <p>Total: {total}$ </p>
      <p>Number of products in cart: {quantity}</p>
      {products.map((e) => (
        <CartItem key={e._id} {...e} />
      ))}
    </div>
  );
};

export default Cart;
