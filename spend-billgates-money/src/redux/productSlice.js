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
    reducers:{
        changeValue:(state,action)=>{
            const {id,count} = action.payload;
            const item = state.items.find((tmp) => tmp.id===id);
            item.count=count;
            let price=0;

            state.items.map((tmp)=>{
                price += Number(tmp.count)*Number(tmp.productPrice);
            });
            state.money= Number(state.initialMoney)-Number(price);
          
        }
    },
})
export const {changeValue} = productSlice.actions;
export default productSlice.reducer;