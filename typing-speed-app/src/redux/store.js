import {configureStore} from "@reduxjs/toolkit"
import wordSlice from "./slice/wordSlice"
export const store = configureStore({
    reducer:{
        wordSlice
    }
})