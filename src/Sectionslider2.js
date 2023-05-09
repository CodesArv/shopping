
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Rangbanner1 from "./asset/girlblackfullcloth.webp";
import Rangbanner2 from "./asset/blackjacket.webp";

function Container11() {
  return (
    <Container fluid>
      <Row className="my-5">
        <Col md={6}>
          <div class="bot">
            <img src={Rangbanner1} className="img-fluid rangimg" />
            <div class="centered">
              <button className="btn1">NEOUX</button>
            </div>
            <div class="bottom-leftUNI">UNISTORE..</div>
            <div class="bottom-left2">BLACK ERA</div>
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

export default Container11;