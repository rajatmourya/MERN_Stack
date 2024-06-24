import { createSlice } from "@reduxjs/toolkit";

const CartItemSlice = createSlice({
  name: "CartItemSlice",
  initialState: {
    cart: [],
  },
   reducers: {
    loadItems: (state, action) => {
      const CartItem = state.cart.find(item => item.id == action.payload);
      if(CartItem.quantity > 0){
        state.cart.push({
            quantity:CartItem.quantity,
            id: action.payload,
            products:action.payload

        })
      }
    },
  },
});

export default CartItemSlice.reducer;

export const {loadItems} = CartItemSlice.actions;