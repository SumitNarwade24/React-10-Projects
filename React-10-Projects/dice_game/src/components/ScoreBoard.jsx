import React from 'react'
import styled from 'styled-components'
const ScoreBoard = ({score,setScore}) => {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

export default ScoreBoard

const ScoreContainer = styled.div`
    h1{
        font-size:112px;
        line-height:100px;
    }
    p{
        font-size:24px;
        font-width:36px;
    }
    text-align:center;

`