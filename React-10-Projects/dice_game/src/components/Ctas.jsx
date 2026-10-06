import React from 'react'
import styled from'styled-components'
const Ctas = ({resetScore,handleRule}) => {
  return (
    <div>
        <ScoreButton onClick={resetScore}>Reset Score</ScoreButton>
        <RuleButton onClick={handleRule}>Show Rules</RuleButton>
    </div>
  )
}

export default Ctas;

const ScoreButton = styled.button`
    width:220px;
    height:40px;
    border-radius:5px;
    background-color:white;
    color:black;
    border:2px solid black;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin: 0 auto;
    margin-top:20px;
    `

    const RuleButton = styled.button`
    width:220px;
    height:40px;
    border-radius:5px;
    background-color:black;
    color:white;
    border:2px solid transparent;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin: 0 auto;
    margin-top:20px;
    `