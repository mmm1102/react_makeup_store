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
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price;
    },
    incrementQuantity(state, action) {
      state.products = state.products.map((elem) => {
        if (elem._id === action.payload) {
          elem.quantity++;
        }
        return elem;
      });
    },
    decrementQuantity(state, action) {
      state.products = state.products.map((elem) => {
        if (elem._id === action.payload) {
          if (elem.quantity > 1) elem.quantity--;
        }
        return elem;
      });
    },
  },
});

export const { addProduct, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
