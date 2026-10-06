import React, { useState } from 'react'
import styled from 'styled-components'
// import dice1 from '../assets/dice_1.png'
// import dice2 from '../assets/dice_2.png'
// import dice3 from '../assets/dice_3.png'
// import dice4 from '../assets/dice_4.png'
// import dice5 from '../assets/dice_5.png'
// import dice6 from '../assets/dice_6.png'
const RollDice = ({selectedDiceNumber,generateRandomDiceNumber}) => {
    

    // const dice_images = [dice1,dice2,dice3,dice4,dice5,dice6]

   
    
   
  return (
    <MainContainer>
        <div className='dice'>
            <img src={`../src/assets/dice_${selectedDiceNumber}.png`} alt="dice 1" onClick={generateRandomDiceNumber}/>
            <p>Click To Roll The Dice</p>
        </div>
        {/* <div>
            playDice
        </div>
        <div>
            showRules
        </div> */}
    </MainContainer>
  )
}

export default RollDice

const MainContainer =styled.div`
    
    .dice{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin-top: 30px;
    }
   .dice p{
        font-size:24px;
        margin-top:20px
    }
    
    
    
    `