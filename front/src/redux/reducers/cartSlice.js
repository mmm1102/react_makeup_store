import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const isItemExist = state.products.find(
        (item) => item._id === payload._id
      );
      if (!isItemExist) {
        state.products = [...state.products, { ...payload, quantity: 1 }];
      } else {
        state.products = state.products.map((item) => {
          if (item._id === payload._id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
      state.quantity++;
      state.total += payload.price;
    },

    removeProduct: (state, { payload }) => {
      state.products = state.products.filter(
        (item) => item._id !== payload._id
      );
      state.quantity -= payload.quantity;
      state.total -= payload.price * payload.quantity;
    },

    incrementQuantity: (state, { payload }) => {
      state.products = state.products.map((item) => {
        if (item._id === payload._id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      state.quantity++;
      state.total += payload.price;
    },

    decrementQuantity: (state, { payload }) => {
      const decrementItem = state.products.find(
        (item) => item._id === payload._id
      );
      if (decrementItem.quantity === 1) {
        state.products = state.products.fiter(
          (item) => item._id !== decrementItem._id
        );
      } else {
        decrementItem.quantity -= 1;
      }
      state.quantity--;
      state.total -= decrementItem.price;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
