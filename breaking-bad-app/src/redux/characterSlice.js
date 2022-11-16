import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
export const fetchCharacters = createAsyncThunk("characters/getCharacters", async()=>{
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=12`)
    return res.data
})

export const characterSlice = createSlice({
    name: "characters",
    initialState: {
        items: [],
    },
    reducers: {},
    //async işlemleri karşılamak için extraReducer kullanılır.
    extraReducers:{
        [fetchCharacters.fulfilled]:(state,action)=>{
            state.items= action.payload
        }
    }
})

export default characterSlice.reducer;