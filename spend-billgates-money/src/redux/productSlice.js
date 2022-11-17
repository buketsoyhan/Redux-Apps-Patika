import { createSlice } from "@reduxjs/toolkit";
import itemsJSON from "../items.json"
const data =itemsJSON.products;

export const productSlice = createSlice({
    name:"products",
    initialState:{
        items:data,
        money: 100000000000,
        initialMoney:100000000000,
    },
    reducers:{},
})

export default productSlice.reducer;