import Home from '../Components/Home.jsx';
import Navbar from '../Components/Navbar.jsx';
import '../Styling/HomePage.css';
const HomePage = () =>{
    return(
        <div className='main-div'>
            <Navbar/>
            <main className='home-div'>
                <Home/>
            </main>

        </div>
    )
}

export default HomePage;