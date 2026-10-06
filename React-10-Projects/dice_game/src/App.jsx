import { useState } from 'react'
import Home from './components/Home.jsx'
import PlayGame from './components/PlayGame.jsx'
import styled from 'styled-components'
import './App.css'

// const HomePage = styled.div`
//   display:flex;
//   min-height:100vh;
//   justify-content:center;
//   align-items:center;
//   `

function App() {
 const[isGamestarted,setIsGameStarted]= useState(false);

 function handleStart(){
    setIsGameStarted((prev) => !prev)
 }
  return (
     <div>
      {isGamestarted?<PlayGame/>:<Home handleStart={handleStart}/>}
     </div>
  )
}

export default App
