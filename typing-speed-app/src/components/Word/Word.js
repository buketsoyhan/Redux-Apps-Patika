import React from 'react'
import styled from 'styled-components'
const Span = styled.span`
background-color: ${props => props.background};
overflow: hidden;
text-rendering: optimizeSpeed;
font-size: 20px;
`
function Word({ word, current, isCorrect }) {
  return (
    <>
      <Span style={{ color: typeof isCorrect !== "undefined" && "#fff" }}
        background={current ? "#ecf0f1" : isCorrect === true ? "#4cd137" : isCorrect === false ? "#e84118" : "transparent"} >
        {word}
      </Span>{" "}
    </>
  )
}

export default Word