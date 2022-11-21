import { createSlice } from "@reduxjs/toolkit"
import data from "../data/data"

export const memorySlice = createSlice({
    name: "cardgame",
    initialState: {
        items: data.sort(() => Math.random() - 0.5),
        score: 0,
        selectedAll: 0
    },
    reducers: {
        gainScore: (state) => {
            state.score += 50;
        },
        lossScore: (state) => {
            state.score -= 10;
        },
        activeToggle: (state, action) => {
            const id = action.payload;
            const item = state.items.find(item => item.id === id)
            item.status = !item.status;
        },
        increment: (state) => {
            state.selectedAll += 1;
        },
        newGame: (state) => {
            const shuffle = [...state.items].sort(() => Math.random() - 0.5);
            state.items.forEach(item => item.status = false);
            state.items = shuffle;
            state.selectedAll = 0;

        },
        resetScore: (state) => {
            state.score = 0;
        },
    }
})
export const { gainScore, lossScore, activeToggle, increment, newGame, resetScore } = memorySlice.actions
export default memorySlice.reducer