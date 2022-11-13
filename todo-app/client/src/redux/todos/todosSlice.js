import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
export const getTodosAsync = createAsyncThunk("/todos/getTodosAsync", async () => { //GET
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`);
    return res.data;
})
export const addTodoAsync = createAsyncThunk("/todos/addTodoAsync", async (data) => { //POST
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`, data);
    return res.data;
})
export const toggleTodoAsync = createAsyncThunk("/todos/toggleTodoAsync", async ({ data, id }) => { //PATCH
    const res = await axios.patch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`, data);
    return res.data;
})
export const removeTodoAsync = createAsyncThunk("todos/removeTodoAsync", async (id) => { //DELETE
    await axios.delete(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`);
    return id;
})
export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        activeFilter: "all",
        addNewTodoLoading: false,
        addNewTodoError: null
    },
    reducers: {
        changeActiveFilter: (state, action) => {
            state.activeFilter = action.payload;
        },
        clearCompleted: (state) => {
            const filtered = state.items.filter(item => item.completed === false)
            state.items = filtered;
        }
    },
    extraReducers: {
        //get todo
        [getTodosAsync.pending]: (state, action) => { //bekleme durumu
            state.isLoading = true;
        },
        [getTodosAsync.fulfilled]: (state, action) => { //olumlu cevap
            state.items = action.payload;
            state.isLoading = false;
        }, [getTodosAsync.rejected]: (state, action) => { //olumsuz cevap
            state.isLoading = false;
            state.error = action.error.message;
        },
        //add todo
        [addTodoAsync.pending]: (state, action) => {
            state.addNewTodoLoading = true;
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            state.items.push(action.payload);
            state.addNewTodoLoading = false;
        },
        [addTodoAsync.rejected]: (state, action) => { //olumsuz cevap
            state.addNewTodoLoading = false;
            state.error = action.error.message;
        },
        //toggle todo
        [toggleTodoAsync.fulfilled]: (state, action) => {
            const { id, completed } = action.payload;
            const index = state.items.findIndex(item => item.id === id);
            state.items[index].completed = completed
        },
        //remove todo
        [removeTodoAsync.fulfilled]: (state, action) => {
            const id=action.payload
            const filtered = state.items.filter((item)=>item.id!==id)
            state.items=filtered
        }
    }
})
export const selectTodos = (state) => state.todos.items
export const { changeActiveFilter, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer