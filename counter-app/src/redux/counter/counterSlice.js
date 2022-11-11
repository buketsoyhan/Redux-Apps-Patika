import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter", //state'e ulaşmak için diğer sayfalarda state.counter şeklinde ulaşabiliyoruz
    initialState:{ //ilk değer atamaları
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        decrement:(state)=>{
            state.value -=1
        }
    }, //state güncellemek için gerekenler
})
export const {increment} = counterSlice.actions;
export const {decrement} = counterSlice.actions;
export default counterSlice.reducer;