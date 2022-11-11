import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter", //state'e ulaşmak için diğer sayfalarda state.counter şeklinde ulaşabiliyoruz
    initialState: {  //ilk değer atamaları
        value: 0
    },
    reducers: {  //state güncellemek için gerekenler
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += Number(action.payload)
        },
    },
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;