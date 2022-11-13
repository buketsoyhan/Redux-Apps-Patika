import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { selectTodos, getTodosAsync, toggleTodoAsync, removeTodoAsync } from "../redux/todos/todosSlice"
import Loading from './Loading';
import Error from "./Error"
let filtered = [];

function TodoList() {
    const dispatch = useDispatch()
    const items = useSelector(selectTodos)
    const activeFilter = useSelector((state) => state.todos.activeFilter)
    const isLoading = useSelector((state) => state.todos.isLoading)
    const error = useSelector((state) => state.todos.error)
    useEffect(() => {
        dispatch(getTodosAsync())
    }, [dispatch])
    filtered = items;
    const handleToggle = async (id, completed) => {
        await dispatch(toggleTodoAsync({ id, data: { completed } }))
    }
    const handleDestroy = async (id) => {
        await dispatch(removeTodoAsync(id))
    }
    if (activeFilter !== "all") {
        filtered = items.filter((todo) =>
            activeFilter === "active"
                ? todo.completed === false
                : todo.completed === true,
        )
    }
    if (isLoading) {
        return <Loading />
    }
    if (error) {
        return <Error message={error} />
    }
    return (
        <div>
            <ul className="todo-list">
                {filtered.map((item) => (
                    <li key={item.id} className={item.completed ? "completed" : ""} >
                        <div className="view">
                            <input className="toggle"
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => handleToggle(item.id, !item.completed)}
                            />
                            <label >{item.title}</label>
                            <button onClick={() => handleDestroy(item.id)} className="destroy"></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList