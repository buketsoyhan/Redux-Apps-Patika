import {createSlice} from "@reduxjs/toolkit"
import data from "../data/data"

console.log(data)

export const memorySlice = createSlice({
    name:"cardgame",
    initialState:{
        items:data.sort(() => Math.random() - 0.5),
        score:0,
        selecterAll:0
    },
    reducers:{
        gainScore:(state)=>{
            state.score +=50;
        },
        lossScore:(state)=>{
            state.score -=50;
        }
    }
})
export const {gainScore, lossScore} = memorySlice.actions
export default memorySlice.reducer