import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";


export const userApi = createAsyncThunk("user/login", async (result) => {
    const res = await axios.post("https://539-commerce.magdsofteg.xyz/api/login",
        result);
    
    const req = res.data;
    
    // Store token in File Cookie:
    const token = req['token'];
    Cookies.set('token', token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    //  console.log(token);
   
    return req;
   
})
export const loginSlice = createSlice({
    name: "login",
    initialState: {
            phone: "",
            password:"",
            pending: null,
            error: false,
    },
    reducers: {},
    extraReducers:(builder) => {
        builder
            .addCase(userApi.pending, (state) => {
                state.pending = true;
                state.error = false;
            })
            .addCase(userApi.fulfilled, (state, action) => {
                state.pending = false;
                state.phone = action.payload;
                state.password = action.payload;
                
            }).addCase(userApi.rejected, (state) => {
                state.pending = false;
                state.error = true
        })
   }
});

export default loginSlice.reducer;