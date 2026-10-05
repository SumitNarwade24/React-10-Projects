import React from 'react'
import logo from '../images/Frame 2 1.png';
import Style from '../Components/Navigations/Navigation.module.css'
const Navigation = () => {
  return (
     <nav>
        <div className={`${Style}`}>
            <img src={logo} alt="" />
        </div>
        <div className='navigation'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation