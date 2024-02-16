import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";


const token = Cookies.get('token');
export const proApi = createAsyncThunk("fetch/products", async () => {
    const response = await axios.get("https://539-commerce.magdsofteg.xyz/api/getProducts", {
        headers: {
            Authorization:`Bearer ${token}`
        }
    });
    console.log(response.data)
    return response.data;
    
    
   
})
export const productSlice = createSlice({
    name: "product",
    initialState: {
        isLoading: false,
        data: null,
        isError:false
    },
    reducers: {},
    extraReducers:(builder) => {
        builder
            .addCase(proApi.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(proApi.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(proApi.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
        })
   }
});

export default productSlice.reducer;