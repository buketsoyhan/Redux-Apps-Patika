import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { filterText } from "../redux/noteSlice"

function Header() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.notes.textFilter)
  
  return (
    <div>
      <p className="header-title"> Notes App</p>
      <br />
      <input
        className="search-input"
        placeholder="Search"
        value={search}
        onChange={(e) => dispatch(filterText(e.target.value))}
      />
    </div>
  )
}

export default Header