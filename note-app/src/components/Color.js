import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { changeActiveColor } from "../redux/noteSlice"

function Color() {
  const dispatch = useDispatch();
  const colors = useSelector(state => state.notes.colors)
  const activeColor = useSelector(state => state.notes.activeColor)
  return (
    <div style={{ display: "flex" }}>
      {colors.map((item, idx) => {
        return (<div key={idx}
          style={{ cursor: 'pointer', backgroundColor: item.colorCode, width: 25, height: 25, borderRadius: '50%', marginLeft: 10 }}
          onClick={() => dispatch(changeActiveColor(item.colorCode))}
        >{activeColor === item.colorCode ? <div style={{ marginTop: 5 }}>&#10004;</div> : null}</div>)

      })}
    </div>
  )
}

export default Color