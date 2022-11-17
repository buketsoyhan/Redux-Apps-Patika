import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name:"products",
    initialState:{
        items:[{}]
    },
    reducers:{},
})

export default productSlice.reducer;