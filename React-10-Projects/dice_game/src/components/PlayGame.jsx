import styled from "styled-components";
import ScoreBoard from "./ScoreBoard.jsx";
import ScoreSelector from "./ScoreSelector.jsx";
import RollDice from "./RollDice.jsx";
import Ctas from './Ctas.jsx'
import Rules from './Rules.jsx'
import { useState } from "react";

const PlayGame = () => {
  const [selectedDiceNumber, setDiceNumber] = useState(1);
  const [selectNumber, setIsSelectednumber] = useState();
  const [score, setScore] = useState(0);
  const[error,setError]=useState("");
  const[rule,setRule]=useState(false);

  function handleRule(){
    setRule((prev) => !prev)
  }

  function resetScore(){
    setScore(0);
  }
  function generateRandomDiceNumber() {
    
    if(!selectNumber){
      setError("You Have To select Any Number");
      return;
    }
    if (selectNumber != null) {
      setError("")
      const randomDiceNumber = Math.floor(Math.random() * 6) + 1;
      handleSelectNumber(randomDiceNumber);
    } else {
      // alert("please select the number first");
    }
  }

  function handleSelectNumber(num) {
    setDiceNumber(num);
    calculateScore(num);
  }

  function calculateScore(diceNumber) {


    //this is taking the previous state

    // console.log("in the calculateScore");
    // if (selectedDiceNumber === selectNumber) {
    //   console.log("selectedDiceNumber" + selectedDiceNumber);
    //   setScore((prev) => prev + selectNumber);
    //   console.log("score" + score);
    // } else if (selectedDiceNumber != selectNumber) {
    //   console.log("selectedDiceNumber" + selectedDiceNumber);
    //   setScore((prev) => prev - selectNumber);
    //   console.log("score" + score);
    // }

    if (diceNumber === selectNumber) {
      setScore((prev) => prev + selectNumber);
    } else {
      setScore((prev) => prev - selectNumber);
    }

    setIsSelectednumber(undefined)
  }

  return (
    <MainContainer>
      <div className="top-section">
        <ScoreBoard score={score} setScore={setScore} />
        <ScoreSelector
          selectNumber={selectNumber}
          setIsSelectednumber={setIsSelectednumber}
          // setSelectorSelected={setSelectorSelected}
          // isSelectorSelected={isSelectorSelected}
          error={error}
          setError={setError}
        />
      </div>

      <div>
        <RollDice
          selectedDiceNumber={selectedDiceNumber}
          generateRandomDiceNumber={generateRandomDiceNumber}
        />
        <Ctas resetScore={resetScore} handleRule={handleRule}/>
        {rule&&<Rules/>}
      </div>
    </MainContainer>
  );
};

export default PlayGame;

const MainContainer = styled.main`
  padding-top: 70px;
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

// const Container = styled.div`
//     height:100vh;
//     display:flex;
//     flex-direction:column;
//     justify-content:center;
//     align-items:center;
//     `
