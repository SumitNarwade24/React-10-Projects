import React from 'react'
import styled from 'styled-components'
const Rules = () => {
  return (
    <Rule>
        <h3>How To Play Dice Game</h3>
        <ul>
            <li>Select Any Number</li>
            <li>Click on Dice Image</li>
            <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
            <li>if you get wrong guess then  2 point will be dedcuted </li>
        </ul>
    </Rule>
  )
}

export default Rules

const Rule = styled.div`
    li{
    list-style:none;
    }
    height:158px;
    width:550px;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin: 0 auto;
    margin-top:10px;
    background-color: #DCBF85;
    padding:20px;
    border-radius:10px;
    
    
    
    `