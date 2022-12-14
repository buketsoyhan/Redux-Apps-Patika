import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {changeActiveFilter, clearCompleted, selectTodos} from "../redux/todos/todosSlice"
function ContentFooter() {
    const dispatch=useDispatch()
    const items=useSelector(selectTodos);
    const itemLeft = items.filter(item=>!item.completed).length;

    const activeFilter=useSelector(state=>state.todos.activeFilter);

    return (
        <footer className="footer">
            <span className='todo-count'>
                <strong>{itemLeft}</strong>{" "} item{itemLeft>1 && 's'} left
            </span>
            <ul className='filters'>
                <li>
                    <a href='#/' 
                    className={activeFilter==="all" ? "selected" : ""} 
                    onClick={()=>dispatch(changeActiveFilter("all"))}
                    >All</a>
                </li>
                <li>
                    <a href='#/' className={activeFilter==="active" ? "selected" : ""}
                    onClick={()=>dispatch(changeActiveFilter("active"))}
                    >Active</a>
                </li><li>
                    <a href='#/' className={activeFilter==="completed" ? "selected" : ""}
                    onClick={()=>dispatch(changeActiveFilter("completed"))}
                    >Completed</a>
                </li>
            </ul>
            <button onClick={()=>dispatch(clearCompleted())} className='clear-completed'>Clear Completed</button>
        </footer>
    )
}

export default ContentFooter