import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { destroy } from "../redux/noteSlice"

let filter = []

function NoteList() {
  const dispatch = useDispatch();
  const search = useSelector(state => state.notes.textFilter)
  const items = useSelector((state) => state.notes.items);

  filter = items.filter((todo) => search === '' ? todo : todo.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', }}>
      {filter.map((value, index) => (
        <div style={{ backgroundColor: value.colorCode, minWidth: 200, minHeight: 50, marginLeft: 20, marginTop: 20, display: 'flex', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, paddingTop: 10 }} key={index}>
          {value.title}
          <p style={{ cursor: 'pointer', color: 'black', fontSize: 20 }} onClick={() => dispatch(destroy(value.id))}>X</p>

        </div>
      ))}
    </div>
  )
}

export default NoteList