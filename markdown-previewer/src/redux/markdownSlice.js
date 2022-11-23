import { createSlice } from "@reduxjs/toolkit";
import { help } from "./helpMarkdownText";

export const markdownSlice = createSlice({
    name: "markdown",
    initialState: {
        textUser: "this is user input",
        textHelp: help,
        isShowingHelp: false,
    },
    reducers: {
        
    }
});

export const { changeText, toggle } = markdownSlice.actions;

export default markdownSlice.reducer;