import React from "react";
import { useDispatch } from "react-redux";
import {
  removeProduct,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/reducers/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { productName, brand, category, price, img, quantity } = props;
  return (
    <div>
      <div className="product-cart">
        <div className="product-image">
          {" "}
          <img src={img} alt={productName} />
        </div>
        <p className="cart-desc">{brand}</p>
        <p className="cart-desc">{productName}</p>
        <p>
          <span id="category-span">category: &nbsp;</span>
          {category}
        </p>
        <p>{price} $</p>

        <div className="quantity">
          <button
            className="btn-quantity"
            onClick={() => dispatch(decrementQuantity(props))}
          >
            {" "}
            &#45;
          </button>
          <p id="quantity-number">{quantity}</p>
          <button
            className="btn-quantity"
            onClick={() => dispatch(incrementQuantity(props))}
          >
            {" "}
            &#43;
          </button>
        </div>
        <button
          className="remove-from-cart"
          onClick={() => dispatch(removeProduct(props))}
        >	&#120;</button>
      </div>
    </div>
  );
};

export default CartItem;
