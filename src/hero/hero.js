import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png"
import "./hero.css";
import Card from "react-bootstrap/Card";

function HeroSection() {
  return (
    
      <><div className="heroSectionDiv">
      <div className="container">
        <a href="" className="bestPriceTag">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="tag"
              fill="#28d590"
              d="M10.3680419,0 C10.5498787,0 10.7242015,0.0724186232 10.8523536,0.201196798 L19.2012145,8.59106451 C19.7601918,9.17730001 20.0381116,9.83950884 19.9957947,10.5491487 C19.9561893,11.2133202 19.692122,11.8233895 19.1886089,12.3950955 L12.1151532,19.4315469 L12.0000892,19.5235714 C11.3616982,19.9295813 10.7409201,20.0881735 10.1508458,19.9524881 C9.6353684,19.833956 9.09560983,19.5157043 8.47256962,18.9741189 L0.312115394,10.7551198 C0.187561563,10.6296724 0.116663511,10.4608505 0.114365484,10.2842393 L0,1.4733236 C0.00673232467,1.04433781 0.126372899,0.680846621 0.392497458,0.413184628 C0.666034778,0.138067049 1.05459295,0.0223681626 1.58823307,0 L10.3680419,0 Z M6.47348527,4.57437532 C5.59375754,4.57437532 4.88059731,5.28629488 4.88059731,6.16449217 C4.88059731,7.04268945 5.59375754,7.75460901 6.47348527,7.75460901 C7.35321299,7.75460901 8.06637322,7.04268945 8.06637322,6.16449217 C8.06637322,5.28629488 7.35321299,4.57437532 6.47348527,4.57437532 Z"
            ></path>
          </svg>
          Best Price Guaranteed
        </a>

        <div className="heroDiv">
          <div>
            <h3 className="goldText">Personal Insurance</h3>
            <div className="boxDiv">
              <a href="" className="listT">
                <div className="round">
                  <img src={img1} alt="" width={45} />
                </div>
                <span className="spanTag">Health Insurance</span>
              </a>
              <a href="" className="listT">
                <div className="round">
                  <img src={img2} alt="" width={45} />
                </div>
                <span>Term Life Insurance</span>
              </a>
              <a href="" className="listT">
                <div className="round">
                  <img src={img3} alt="" width={45} />
                </div>
                <span>Car Insurance</span>
              </a>
              <a href="" className="listT">
                <div className="round">
                  <img src={img4} alt="" width={45} />
                </div>
                <span>bike Insurance</span>
              </a>
            </div>
          </div>
          <div className="vl"></div>
          <div style={{ display: "flex" }}>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 className="goldText">Employee Insurance</h3>
              <div className="boxDiv">
                <a href="" className="listT">
                  <div className="round">
                    <img src={img5} alt="" width={45} />
                  </div>
                  <span>Health Insurance</span>
                </a>
                <a href="" className="listT">
                  <div className="round">
                    <img src={img6} alt="" width={45} />
                  </div>
                  <span>Term Life Insurance</span>
                </a>
                <a href="" className="listT">
                  <div className="round">
                    <img src={img7} alt="" width={45} />
                  </div>
                  <span>Car Insurance</span>
                </a>
                <a href="" className="listT">
                  <div className="round">
                    <img src={img8} alt="" width={45} />
                  </div>
                  <span>bike Insurance</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><h3 className="knowHeader">Know More About The Policies</h3><div className="container">
        <div className="boxDivHero">
          <div>
            <h3>Personal Insurance</h3>
            <div className="personalInsurance">
              <Card className="text-center mainCard">
                <Card.Body className="bodyCard">
                  <img src={img1} width={50}></img>
                  <Card.Text className="textPart">health Insurance</Card.Text>
                </Card.Body>
              </Card>
              <Card className="text-center mainCard">
                <Card.Body className="bodyCard">
                  <img src={img2} width={50}></img>
                  <Card.Text className="textPart">health Insurance</Card.Text>
                </Card.Body>
              </Card>
              <Card className="text-center mainCard">
                <Card.Body className="bodyCard">
                  <img src={img3} width={50}></img>
                  <Card.Text className="textPart">health Insurance</Card.Text>
                </Card.Body>
              </Card>
              <Card className="text-center mainCard">
                <Card.Body className="bodyCard">
                  <img src={img4} width={50}></img>
                  <Card.Text className="textPart">health Insurance</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="vl1"></div>
          <div className="rightBox">

            <div className="rightSideDiv">
              <h3 className="empIns">Employee Insurance</h3>
              <div className="personalInsurance">
                <Card className="text-center mainCard">
                  <Card.Body className="bodyCard">
                    <img src={img5} width={50}></img>
                    <Card.Text className="textPart">health Insurance</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="text-center mainCard">
                  <Card.Body className="bodyCard">
                    <img src={img6} width={50}></img>
                    <Card.Text className="textPart">health Insurance</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="text-center mainCard">
                  <Card.Body className="bodyCard">
                    <img src={img7} width={50}></img>
                    <Card.Text className="textPart">health Insurance</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="text-center mainCard">
                  <Card.Body className="bodyCard">
                    <img src={img8} width={50}></img>
                    <Card.Text className="textPart">health Insurance</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      </>
     
    
  );
}
export default HeroSection;
