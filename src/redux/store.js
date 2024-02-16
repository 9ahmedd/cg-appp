import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import categorySlice from "./categorySlice";
import productSlice from "./productSlice";
import productByIdSlice, { productId } from "./productByIdSlice";

const store = configureStore({
    reducer: {
        user: loginSlice,
        category: categorySlice,
        product: productSlice,
        productId:productByIdSlice,
    }
})

export default store;