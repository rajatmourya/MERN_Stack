import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchData = createAsyncThunk("product/fetch", async () => {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  return await response.json();
  
});

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    products: [],
    status: "idle", // idle, loading, success. failed
    error: null,
  },
  reducers: {
    loadProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: function (builder) {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "success";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});


export const { loadProducts } = ProductSlice.actions;

export default ProductSlice.reducer;
