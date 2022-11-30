import {useEffect, useState} from 'react'
import "./style.css"
import {useDispatch, useSelector} from "react-redux";
import { setFinished, setShowResult, setStartGame } from '../../redux/slice/wordSlice'
function Timer() {
    const dispatch = useDispatch();
    const {isStartGame} = useSelector(state=>state.wordSlice)
    const [timer, setTimer] =useState(null)

    const countDown = () => {
        setTimeout(() => setTimer(prev => prev - 1), 1000)
    }
    useEffect(()=>{
        if(isStartGame===false) setTimer(60)
        if(isStartGame===false) timer !==0 && countDown()
        if (timer === 0) { dispatch(setFinished(true)); dispatch(setStartGame(false)); dispatch(setShowResult(true)) }
    }, [timer, isStartGame])
  return (
    <div className='container'>
        {timer === 60 ? "1:00" : timer < 10 ? `0${timer}` : timer}
    </div>
  )
}

export default Timer