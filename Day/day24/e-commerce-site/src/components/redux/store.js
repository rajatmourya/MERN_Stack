import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Slices/ProductSlice";
import CartReducer from "./Slices/CartSlice";
import CartItemReducer from "./Slices/CartItemSlice";

export default configureStore({
    reducer: {
        ProductReducer,
        CartReducer,
        CartItemReducer

    }
});