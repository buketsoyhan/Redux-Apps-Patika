import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useSelector } from 'react-redux'
import Word from './Word'
function WordList() {
    const { words, activeIndex, correctWords } = useSelector(state => state.wordSlice)
    return (
        <div className='list'>
            {words.map((word, idx) => (
                <Word key={nanoid()} word={word} current={idx === activeIndex} isCorrect={correctWords[idx]} />
            ))}
        </div>
    )
}

export default WordList