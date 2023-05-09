import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Rangbanner1 from "./asset/rangebanner.jpg";
import Rangbanner2 from "./asset/yellow.webp";
import Nike from "./asset/nikelogo.png";

function Container1() {
  return (
    <Container fluid>
      <Row className="my-5">
        <h1 className="text-center">EXPLORE THE BRAND RANGE</h1>
        <p className="text-center"> EXPLORE RANGE WORLD</p>
        <Col md={6}>
          <div class="bot">
            <img src={Rangbanner1} className="img-fluid rangimg" />
            <div class="centered">
              <button className="btn1">ADDIDAS</button>
            </div>
            <div class="bottom-left">ADDIDAS</div>
            <div class="bottom-left2">run divison</div>
          </div>
        </Col>
        <Col md={6}>
          <div class="bot">
            <img src={Rangbanner2} className="img-fluid rangimg" />
            <div class="centered">
              <button className="btn1">WOLFWOX</button>
            </div>
            <div class="bottom-right">WOLFWOX JACKET</div>
          </div>
        </Col>


      </Row>
    </Container>
  );
}

export default Container1;
