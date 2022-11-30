import { getWords } from "../../data/words";
import { createSlice } from "@reduxjs/toolkit"

export const wordSlice = createSlice({
    name: "words",
    initialState: {
        words: getWords(),
        activeIndex: 0,
        correctWords: [],
        isFinished: false,
        isStartGame: false,
        showResult: false,
        inCorrectChar: 0,
        correctChar: 0,
        editWordCount: 0,
        wordLang: "turkish",
    },
    reducers: {
        setActiveIndex: (state, action) => {
            state.activeIndex += 1
        },
        setCorrectWords: (state, action) => {
            state.correctWords.push(action.payload)
        },
        setFinished: (state, action) => {
            state.isFinished = action.payload
        },
        setStartGame: (state, action) => {
            state.isStartGame = action.payload
        },
        rety: (state, action) => {
            console.log("first")
            state.words = getWords(action.payload)
            state.activeIndex = 0
            state.inCorrectChar = 0
            state.correctWords = []
            state.correctChar = 0
            state.editWordCount = 0
        }, changeLang: (state, action) => {
            state.wordLang = action.payload
            state.words = getWords(state.wordLang)
        },
        setShowResult: (state, action) => {
            state.showResult = action.payload
        }, setInCorrectChar: (state, action) => {
            state.inCorrectChar += action.payload
        },
        setCorrectChar: (state, action) => {
            state.correctChar += action.payload
        },
        setEditWordCount: (state, action) => {
            state.editWordCount += 1
        },
        getMore: (state, action) => {
            state.words.push(...getWords(state.wordLang))
        }
    }
})
export const { getMore, setActiveIndex, setCorrectWords, setFinished, setStartGame, rety, changeLang, setShowResult, setInCorrectChar, setCorrectChar, setEditWordCount } = wordSlice.actions
export const countCorrectWords = state => state.wordSlice.correctWords.filter(item => item === true).length
export const countInCorrectWords = state => state.wordSlice.correctWords.filter(item => item === false).length
export const curretListKeyStrokeCount = state => state.wordSlice.words.join("").length
export default wordSlice.reducer