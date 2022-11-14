import React, { useState } from 'react'
import Color from "./Color";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/noteSlice";
function Form() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const addTodos = () => {
    if (todo !== "") {
      dispatch(addTodo(todo))
      setTodo("")
    }
    console.log({ todo });
  }

  return (
    <div className="form-container">
      <textarea className="form-input" placeholder="Enter your note here..." value={todo} onChange={(e) => setTodo(e.target.value)} />
      <div className="form-footer">
        <Color />
        <button className="add-button" onClick={() => addTodos()}>ADD</button>
      </div>
    </div>
  )
}

export default Form