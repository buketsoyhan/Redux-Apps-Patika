import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getTodosAsync = createAsyncThunk("/todos/getTodosAsync", async ()=>{
    const res = await fetch("http://localhost:7000/todos");
    return await res.json();
})
export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        isLoading:false,
        error:null,
        activeFilter:"all"
    },
    reducers: {
        addTodo: (state,action)=>{
            state.items.push(action.payload)
        },
        toogle: (state,action)=>{
            const {id} =action.payload;
            const item =state.items.find(item=>item.id===id)
            item.completed=!item.completed
        },
        destroy:(state,action)=>{
            const id = action.payload;
            const filtered = state.items.filter((item)=>item.id !==id)
            state.items=filtered
        },
        changeActiveFilter:(state,action) =>{
            state.activeFilter=action.payload;
        },
        clearCompleted:(state)=>{
            const filtered=state.items.filter(item=>item.completed===false)
            state.items=filtered;
        }
    },
    extraReducers:{
        [getTodosAsync.pending]:(state,action)=>{ //bekleme durumu
            state.isLoading=true;
        },
        [getTodosAsync.fulfilled]:(state,action)=>{ //olumlu cevap
            state.items=action.payload;
            state.isLoading=false;
        },[getTodosAsync.rejected]:(state,action)=>{ //olumsuz cevap
            state.isLoading=false;
            state.error=action.error.message;
        },
    }
})
export const selectTodos = (state)=>state.todos.items
export const {addTodo, toogle,destroy,changeActiveFilter,clearCompleted} = todosSlice.actions;
export default todosSlice.reducer