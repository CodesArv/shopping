import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nike from "./asset/logonike.jpg";
import Rebook from "./asset/Reebok_Vector_Classic_Logo.jpg";
import Addidas from "./asset/adidas_PNG8.png";
import Rolex from "./asset/rolex-logo-0.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Container15() {
  return (
    <Container fluid>
      <Row className="my-5 text-center">
        <Col md={2} className="brand-border">
          <img src={Nike} className="img-fluid imgbrand " />
        </Col>

        <Col md={2} className="brand-border">
          <img src={Rebook} className="img-fluid  imgbrand " />
        </Col>
        <Col md={2} className="brand-border">
          <img src={Addidas} className="img-fluid imgbrand" />
        </Col>
        <Col md={2} className="brand-border">
          <img src={Rolex} className="img-fluid imgbrand" />
        </Col>
        <Col md={2} className="brand-border">
          <h1 className="marginrun">NEO</h1>
        </Col>
        <Col md={2} className="brand-border">
          <h1 className="marginrun">RUNNER</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Container15;
