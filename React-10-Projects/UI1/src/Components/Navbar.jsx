import BrandLog from '../assets/brand_logo.png';
import '../Styling/Navbar.css';

const Navbar = () =>{
    return(
        <div className='parent'>
            <nav className="nav-bar">
                <div className='Logo'>
                    <img src={BrandLog} alt="Brand_logo"/>
                </div>

                
                    <ul>
                        <li>Home</li>
                        <li>Loation</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                
                <div className="cta">
                    <button>Login</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;