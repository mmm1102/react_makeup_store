import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,

};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const itemInCart = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (itemInCart) {
         state.quantity += 1;
       
      
      } else {
       state.products.push({ ...action.payload});
        //  state.products.push(action.payload);
        state.quantity += 1;
     
      }
    },

    // addProduct: (state, action) => {
    //   state.quantity += 1;
    //   state.products.push(action.payload);
    //   state.total += action.payload.price;
    // },

    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item._id === action.payload._id);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item._id === action.payload._id);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.products.filter((item) => item._id !== action.payload._id);
      state.products = removeItem;
    },
    // removeProduct(state, action) {
    //   state.quantity -= 1;
    //   // state.products = state.products.filter(
    //   //   (elem) => elem._id !== action.payload._id
    //   // );
    //   state.products = state.products.filter(
    //     (item) => item._id !== action.payload._id
    //   );
    //   state.total -= action.payload.price;
    // },
  },
});

export const {
  addProduct,
  incrementQuantity,
  decrementQuantity,
  removeProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
