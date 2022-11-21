import React from 'react'
import "./style.css"
import {useSelector, useDispatch} from "react-redux"
function Header() {
  const score = useSelector(state=>state.memory.score)
  const dispatch = useDispatch();
  function handleGame(){
//  to be filled
  }
  return (
    <header>
      <h1>Memory Game</h1>
      <div className='header-flex'>
        <div className='header-flex'>
          <h3>Score:  </h3>
          <p className='header-score'> {score}</p>
        </div>
        <button type='button' className='btn' onClick={handleGame}>New Game</button>
      </div>
    </header>
  )
}

export default Header