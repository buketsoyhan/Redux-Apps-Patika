import React from 'react'
import "./style.css"
import { useSelector, useDispatch } from 'react-redux';
import { gainScore, lossScore } from "../../redux/memorySlice"
function Main() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.memory.items)
  const score = useSelector((state) => state.memory.score)
  console.log(cards);
  console.log(score);
  return (
    <div>
      Main
      <br />
      <button onClick={() => dispatch(gainScore())}>Gain</button>
      <button onClick={() => dispatch(lossScore())}>Loss</button>
      <div>{score}</div>
    </div>
  )
}

export default Main