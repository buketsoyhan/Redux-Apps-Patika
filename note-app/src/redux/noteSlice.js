import { createSlice, nanoid } from "@reduxjs/toolkit"

export const noteSlice = createSlice({
    name: "notes",
    initialState: {
        colors: [{
            color:"purple"
        }]
    },
    reducers: {}
})
export default noteSlice.reducer;