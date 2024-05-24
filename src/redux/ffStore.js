import { configureStore } from "@reduxjs/toolkit"
import productSlice from './slice/productSlice'

const ffStore = configureStore({
    reducer:{
        productReducer:productSlice
    }
});
export default ffStore;