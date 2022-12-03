
import { Form, Input } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveIndex, setCorrectChar, setCorrectWords, setEditWordCount, setInCorrectChar, setStartGame } from '../../redux/slice/wordSlice'

function FormComponent() {
    const { words, activeIndex, isFinished, isStartGame, } = useSelector(state => state.wordSlice)

    const dispatch = useDispatch()
    const [userInput, setUserInput] = useState("")
    const handleChange = (e) => {
        const value = e.target.value
        if (value.endsWith(' ')) {
            if (words[activeIndex] === userInput) {
                dispatch(setCorrectWords(true))
                dispatch(setCorrectChar(userInput.length))
            } else {
                dispatch(setCorrectWords(false))
                dispatch(setInCorrectChar(userInput.length))

            }
            dispatch(setActiveIndex()); setUserInput('')
        } else {
            if (words[activeIndex].includes(value) === false) dispatch(setEditWordCount())
            setUserInput(value)
        }
    }
    return (
        <Form.Item style={{ marginTop: 10 }}>
            <Input onKeyUp={() => dispatch(setStartGame(true))} disabled={isFinished}
                style={{ borderRadius: 5 }} value={isStartGame === false ? '' : userInput} onChange={(e) => handleChange(e)} />
        </Form.Item>
    )
}

export default React.memo(FormComponent)