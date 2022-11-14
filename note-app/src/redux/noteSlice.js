import { createSlice, nanoid } from "@reduxjs/toolkit"

export const noteSlice = createSlice({
    name: "notes",
    initialState: {
        colors: [
            { color: 'p1', colorCode: '#df5dde' },
            { color: 'p2', colorCode: '#e26fe1' },
            { color: 'p3', colorCode: '#e681e5' },
            { color: 'p4', colorCode: '#e993e9' },
            { color: 'p5', colorCode: '#eda5ed' },
            { color: 'p6', colorCode: '#f1b7f0' },
        ],
        activeColor: '#f4c9f4',
        textFilter: "",
        items: [

        ],
    },

    reducers: {
        addTodo: (state, action) => {
            state.items.push({
                id: nanoid(),
                title: action.payload,
                colorCode: state.activeColor
            })
        },
        changeActiveColor: (state, action) => {
            state.activeColor = action.payload
        },
        filterText: (state, action) => {
            state.textFilter = action.payload
        },
        destroy: (state, action) => {
            const id = action.payload
            const filtered = state.items.filter((item) => item.id !== id)
            state.items = filtered;
        }
    }
})
export const { changeActiveColor, addTodo, filterText, destroy } = noteSlice.actions;
export default noteSlice.reducer;