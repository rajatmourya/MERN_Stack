import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    cart: [],
  },
  reducers:{
    addToCart: (state, action) => {
        const CartItem = state.cart.find(item => item.id == action.payload);
        if(CartItem){
            CartItem.quantity += 1;
            return;
        }
        state.cart.push({
            quantity: 1,
            id: action.payload,
        })
    },
    removeFromCart: (state, action) => {
        const cartItem = state.cart.find(item => item.id == action.payload);
        if(cartItem){
            if(cartItem.quantity > 0){
                cartItem.quantity -= 1;
                if(cartItem.quantity == 0){
                    state.cart = state.cart.filter(item => item.id !== action.payload);
                }
            }
        }
    }
  }
});

export default CartSlice.reducer;

export const {addToCart, removeFromCart} = CartSlice.actions;