import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get('token');

export const catApi = createAsyncThunk("fetch/category", async () => {
    const response = await axios.get("https://539-commerce.magdsofteg.xyz/api/getCategories", {
        headers: {
            Authorization:`Bearer ${token}`
        }
    });
    console.log(response.data)
    return response.data;
    
    
   
})
export const categorySlice = createSlice({
    name: "category",
    initialState: {
        isLoading: false,
        data: null,
        isError:false
    },
    reducers: {},
    extraReducers:(builder) => {
        builder
            .addCase(catApi.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(catApi.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(catApi.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
        })
   }
});

export default categorySlice.reducer;