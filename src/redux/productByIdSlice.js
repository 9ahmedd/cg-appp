import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";


const token = Cookies.get('token');
export const proIdApi = createAsyncThunk("fetch/productId", async (proId) => {
    const response = await axios.get(`https://539-commerce.magdsofteg.xyz/api/getProductById/${proId}`, {
        headers: {
            Authorization:`Bearer ${token}`
        } 
    });
    console.log(response.data)
    return response.data;
    
    
   
})
export const productId = createSlice({
    name: "productId",
    initialState: {
        isLoading: false,
        data: null,
        isError:false
    },
    reducers: {},
    extraReducers:(builder) => {
        builder
            .addCase(proIdApi.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(proIdApi.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(proIdApi.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
        })
   }
});

export default productId.reducer;