import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  removeProduct,
  incrementQuantity,
  decrementQuantity,
} from "../redux/reducers/cartSlice";

const Cart = (product, quantity) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  console.log(cart.quantity);
  console.log(cart.products);
// console.log(cart.total)
  // let total = cart.total;

  
  if (cart.quantity === 0) {
    return <h2 className="no-items">No items in cart...</h2>;
  }

  const handleIncrement = () => {
    dispatch(incrementQuantity({ ...product }, quantity));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity({ ...product }, quantity));
  };

  const handleRemove = () => {
    dispatch(removeProduct({ ...product }, quantity));
  };

  return (
    <div>
      <h3>Cart</h3>
      <p>Total: {cart.total}$ </p>
      <p>Number of products in cart: {cart.quantity}</p>
      {cart.products.map((e) => {
        return (
          <div className="product-cart" key={e._id}>
            <div className="product-image">
              {" "}
              <img src={e.img} alt={e.productName} />
            </div>
            <p className="cart-desc">{e.brand}</p>
            <p className="cart-desc">{e.productName}</p>
            <p>
              <span id="category-span">category: &nbsp;</span>
              {e.category}
            </p>
            <p>{e.price} $</p>

            <div className="quantity">
              <button onClick={handleDecrement} className="btn-quantity">
                <FontAwesomeIcon
                  icon={faMinus}
                  size="lg"
                  style={{ color: "#0D6EFD" }}
                />
              </button>
              <p id="quantity-number">kolicina ovog proizvoda: {e.quantity}</p>
              <button onClick={handleIncrement} className="btn-quantity">
                <FontAwesomeIcon
                  icon={faPlus}
                  size="lg"
                  style={{ color: "#0D6EFD" }}
                />
              </button>
            </div>

            <p>ukupno svih proizvoda u korpi: {cart.quantity}</p>
            <button onClick={handleRemove} className="remove-from-cart">
              <FontAwesomeIcon icon={faXmark} className="highlight" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
