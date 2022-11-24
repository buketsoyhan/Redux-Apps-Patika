import React from 'react'
import { useDispatch } from "react-redux"
import { helpMe } from "../redux/markdownSlice"
function Content() {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="header">
                <h1>Markdown Previewer</h1>
                <div className="help-button" onClick={() => dispatch(helpMe())}>
                    ?
                </div>
            </div>
        </div>
    )
}

export default Content