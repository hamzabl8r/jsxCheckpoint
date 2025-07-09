import "./App.css";
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";
import Urlimg from "./components/urlimg";
import Hello from "./components/hello";


export default function App() {

  return (
    <>
    
      <div className="product">
      
        <div className="card ">
          <div className="img-container">
            <Urlimg />
          </div>
          <div className="card-title">
            <Name />
          </div>
          <div className="card-description">
            <Description />
          </div>
          <div className="card-price">
            <Price />
          </div>
          <div className="card-button">
            <button className="btn">Add to Cart</button>
          </div>
        </div>
        <div className="wlcome">
        <Hello />
      </div>
      </div>
    </>
  );
}
