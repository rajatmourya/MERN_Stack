import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("products/fetch", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return await response.json();
});

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    products: [],
    status: "idle", // idle, loading, success, failed
    error: null,
  },
  // reducers: {
  //   loadProducts: (state, action) => {
  //     state.products = action.payload;
  //   },
  // },
  extraReducers: function(builder) {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "success";
      });
  },
});

export const { loadProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
