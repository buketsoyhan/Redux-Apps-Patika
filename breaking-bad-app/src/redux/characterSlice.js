import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

let value=12;
export const fetchCharacters = createAsyncThunk("characters/getCharacters", async (page) => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=${value}&offset=${page * value}`)
    return res.data
})

export const characterSlice = createSlice({
    name: "characters",
    initialState: {
        items: [],
        status:"idle",
        page: 0,
        hasNextPage: true,
    },
    reducers: {},
    //async işlemleri karşılamak için extraReducer kullanılır.
    extraReducers: {
        [fetchCharacters.pending]:(state,action)=>{
            state.status="loading"
        },
        [fetchCharacters.fulfilled]: (state, action) => {
            state.items = [...state.items, ...action.payload] //Yeni gelen sayfalanın verileri bir önceki sayfanın verilerinin üzerine yazılması için 
            state.status="succeeded"
            state.page += 1

            if (action.payload.length < 12) {
                state.hasNextPage = false
            }
        },
        [fetchCharacters.rejected]:(state,action)=>{
            state.status="failed"
            state.error=action.error.message;
        },
    }
})

export default characterSlice.reducer;