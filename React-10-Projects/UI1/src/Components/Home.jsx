import shoe_image from '../assets/shoe_image.png';
import flipkart from '../assets/flipkart.png';
import amazon from '../assets/amazon.png';
import '../Styling/Home.css';
const Home = () => {
  return (
    <div className="main-compo">
      <div className="hero">

        <div className="Heading">
          <p>Your Feet Deserve The Best</p>
        </div>

        <div className="description">
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
        </div>

        <div className="cta">
            <button>Shop Now</button>
            <button>Category</button>
        </div>

        <div className="branding">
            <p>Also Availabel on</p>
            <div className='images'>
                <img src={flipkart}/>
                <img src={amazon}/>
            </div>
        </div>

      </div>

      <div className="image">
        <img src={shoe_image} alt="Shoe-Image" />
      </div>
    </div>
  );
};
export default Home;
