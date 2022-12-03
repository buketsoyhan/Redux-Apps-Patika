import "./style.css"
import { nanoid } from '@reduxjs/toolkit';
import { Button, Select } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getObjectKeys } from '../../data/words';
import { changeLang, rety, setFinished, setStartGame } from '../../redux/slice/wordSlice'
import Timer from "../Timer/index"

const { Option } = Select;

function Footer() {
    const dispatch = useDispatch()
    const { wordLang, isStartGame } = useSelector(state => state.wordSlice)
    const handleChange = (value) => {
        dispatch(changeLang(value.label))
        dispatch(rety(value.label))
        dispatch(setStartGame(false))
        dispatch(setFinished(false))
    };
    const handleRety = () => {
        dispatch(rety(wordLang))
        dispatch(setStartGame(false))
        dispatch(setFinished(false))
    }
    return (
        <div className="container" >
            <Timer />
            <Button onClick={handleRety} type="primary" >Rety</Button>
            <Select
                disabled={isStartGame}
                labelInValue
                defaultValue={{
                    value: wordLang,
                    label: wordLang,
                }}
                style={{
                    textTransform: 'capitalize',
                    minWidth: 100
                }}
                onChange={handleChange}
            >
                {getObjectKeys().map(item => (
                    <Option style={{
                        textTransform: 'capitalize'
                    }} key={nanoid()} value={item}>{item}</Option>
                ))}
            </Select>
        </div>
    )
}

export default Footer