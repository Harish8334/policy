import { Button } from "react-bootstrap";
import "./doubts.css";
import card1 from "../assets/caed1.jpeg";
import card2 from "../assets/card2.jpeg";
import card3 from "../assets/card3.jpeg";
import card4 from "../assets/card4.jpeg";

function Doubts() {
  return (<>
  <div className="container">
    <h1 className="doubtsText">Have any doubts? Please contact us</h1>
      <div className="doubtsDiv">
        <div className="doubtBox">
          <h4>General enquiries</h4>
          <h6>customercare@policynation.com</h6>
        </div>
        <div className="doubtBox">
          <h4>Customer sales enquiries</h4>
          <h6>044-40116065</h6>
        </div>
      </div></div>
    <div className="doubtMainDiv">
    <div className="container">
      
      <div className="cardGroup">
        <h2>Why Policynation?</h2>
        <h4>4 Reasons to buy from Policynation</h4>
        <div
         className="cardGroupDiv"
        >
          <div className="card text-center flexDiv">
        <span className="blueNum">01</span>

            <img className="card-img-top cardImg" src={card1} alt="Title" />
            <div className="card-body">
                
              <h4 className="card-title">Accessible</h4>
              <p className="card-text">
                5 mins to buy a policy. Instant accessibility to 50+
              </p>
              <p className="card-text greenButton">Read More</p>
            </div>
          </div>{" "}
          <div className="card text-center flexDiv">
        <span className="blueNum">02</span>

            <img className="card-img-top cardImg" src={card2} alt="Title" />
            <div className="card-body">
              <h4 className="card-title">Affordable</h4>
              <p className="card-text">
                Absolute clarity on features of the policies.
              </p>
              <p className="card-text greenButton">Read More</p>

            </div>
          </div>{" "}
          <div className="card text-center flexDiv">
        <span className="blueNum">03</span>

            <img className="card-img-top cardImg" src={card3} alt="Title" />
            <div className="card-body">
              <h4 className="card-title">Personal Assistance</h4>
              <p className="card-text">
                We provide assistance from buying Insurance
              </p>
              <p className="card-text greenButton">Read More</p>

            </div>
          </div>{" "}
          <div className="card text-center flexDiv">
        <span className="blueNum">04</span>

            <img className="card-img-top cardImg" src={card4} alt="Title" />
            <div className="card-body">
              <h4 className="card-title">100% Document Back-up</h4>
              <p className="card-text">
                Access all your policies at a click of a button
              </p>
              <p className="card-text greenButton">Read More</p>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div></>
  );
}
export default Doubts;
