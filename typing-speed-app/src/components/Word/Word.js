import React from 'react'
import "./style.css"

function Word({ word, current, isCorrect }) {
    return (
        <div className='container' style={{ color: typeof isCorrect !== "undefined" && "#fff" }}
            background={current ? "#ecf0f1" : isCorrect === true ? "#4cd137" : isCorrect === false ? "#e84118" : "transparent"} >
            {word}
        </div>
    )
}

export default Word