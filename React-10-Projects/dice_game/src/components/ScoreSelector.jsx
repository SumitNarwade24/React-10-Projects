import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
const ScoreSelector = ({selectNumber,setIsSelectednumber,error,setError}) => {
    

    function handleSelect(el){
        console.log(el)
        setIsSelectednumber(el)
        setError("")
        // setSelectorSelected(true)
    }

    const numberArray=[1,2,3,4,5,6]
  return (
    <Container>
        {/* {isSelectorSelected || <p className='error'>Please select A Number</p>} */}
        <p className='error'>{error}</p>
        <div className='flexContainer'>
    {numberArray.map( (el) =>(
        <ScoreButton 
        isSelected={el === selectNumber}
        key={el}
        onClick={() => handleSelect(el)}><p>{el}</p></ScoreButton>   
    )
    )}
    </div>
    <h1>Select Number</h1>
    </Container>
  )
}

export default ScoreSelector;


    const ScoreButton = styled.button`
        height:72px;
        width:72px;
        border:1px solid black;
        font-weight:600;
        background-color:${(props) =>(props.isSelected ? "black": "white")};
        color:${(props) =>(props.isSelected ? "white": "black")};
    `

const Container = styled.div`
display:flex;
flex-direction:column;
gap: 10px;
h1{
            text-align: end;
    }
.flexContainer{
display:flex;
gap: 10px;
}
p{
font-weight:900}
.error{
color:red;
font-size:20px;
font-weight:600;
}
    `
