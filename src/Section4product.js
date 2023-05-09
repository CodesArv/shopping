import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "./asset/oip1.jpg";

function Container5() {
  return (
    <Container fluid>
      <Row className="mb-5">
        <h1>
          <marquee width="100%" direction="left" className="my-3 pay">
            30% OFF YOUR NEXT PURCHASE BUY NOW - PAY LATER FREE RETURNS
          </marquee>
        </h1>

        <Col md={7}>
          <img src={img1} className="img-fluid jackimg" />
        </Col>

        <Col md={5} className="mt-5">
          <h1 className="LATHER ">
            THE NEWEST LIMITED EDITION <br />
            <span className="l-jack">LEATHER JACKET</span>
          </h1>
          <p className="bro">BROWSE 50% off</p>
            <h5 className="bro">Find the ideal pieces for you</h5>
          <button className="btn-watch3">LATHER JACKET</button>
        </Col>
      </Row>
    </Container>
  );
}

export default Container5;
