import styled from "styled-components"
import dice_image from '../assets/dices 1.png'

const Button = styled.button`
    background-color : black;
    color : white;
    padding : 10px 18px 10px 18px;
    width:220px;
    height:44px;
    border-radius : 5px;
    border:1px solid transparent;
    &:hover{
    background-color:white;
    cursor:pointer;
    color:black;
    border:1px solid black;
    transition: 0.4s background ease-in;
    }
`

const P = styled.p`
    height:auto;
    width:528px;
    font-weight:700;
    font-size:96px;
`

const Img = styled.img`
    width:649px;
    height:522px;
    `

const HeroSection = styled.div`
    display:flex;
    max-width:1180px;
    height:100vh;
    gap:20px;
    margin:0 auto;
    align-items:center;

   
    `

const Home = ({handleStart}) => {
  return (
    <HeroSection className="hero_section">
      <div className="hero_image">
        <Img src={dice_image} alt="" />
      </div>
      <div className="cta">
        <P>DICE GAME</P>
        <Button onClick={handleStart}>Play Now</Button>
      </div>
    </HeroSection>
  )
}

export default Home
