// import React from "react";
// import { useDispatch } from "react-redux";
// import { removeProduct } from "../../redux/reducers/cartSlice";

// function CartItem(props) {
//   const dispatch = useDispatch();
//   const { productName, brand, category, price, img } = props;
//   return (
//     <div className="cart-item">
//       <div className="product-image">
//         <img src={img} alt={productName} />
//       </div>
//       <div className="product-title">
//         <p>{productName}</p>
//         <p className="product-price">${price}</p>
//         <button className=" btn btn-primary" onClick={() => dispatch(removeProduct(props))}>
//           Remove from cart
//         </button>
//       </div>
//       <h4>
//         <span className="quantity_input_left">&minus;</span>
//         <span className="quantity_number">quantity</span>
//         <span className="quantity_input_right">+</span>
//       </h4>
//     </div>
//   );
// }

// export default CartItem;
