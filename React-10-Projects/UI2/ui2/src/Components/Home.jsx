import React from 'react'
import img from '../images/Service 24_7-pana 1.svg';
import styling from '../Components/Home/Home.module.css';
const Home = () => {
  return (
    <div className={`${styling.content} content`}>
        <div className={`${styling.Heading} Heading`}>
            <p>CONTACT US</p>
            <div className={`${styling.description} description`}>
                <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
            </div>
        </div>
    <div className={`${styling.body} body`}>
        <div className={`${styling.information} information`}>
            <button>call</button>
            <button>support via chat</button>
        <div className={`${styling.cta} cta`}>
            <button>via email</button>
        </div>
            <form>
                <fieldset>
               <legend>name</legend> 
               <input type="text" title='name'/>
               </fieldset>
               <fieldset>
               <legend>email</legend>
                <input type="text"/>
                </fieldset>
                <fieldset>
               <legend>text</legend>
                <input type="text"/>
                </fieldset>
               <button>submit</button>
            </form>
            </div>
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Home