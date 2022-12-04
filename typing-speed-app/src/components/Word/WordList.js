import { nanoid } from '@reduxjs/toolkit'
import React, {memo} from 'react'
import { useSelector } from 'react-redux'
import Word from './Word'
import "./style.css"
function WordList() {
    const { words, activeIndex, correctWords } = useSelector(state => state.wordSlice)
    return (
        <div className='list'>
            {words.map((word, idx) => (
                <Word className="words" key={nanoid()} word={word} current={idx === activeIndex} isCorrect={correctWords[idx]} />
            ))}
        </div>
    )
}

export default memo(WordList)