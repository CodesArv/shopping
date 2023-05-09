import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imgsummer from "./asset/sportpng.png";
import imgsummer2 from "./asset/nikeshort png.jpg";
import imgsummer3 from "./asset/footballpng.jpg";

function Container6() {
  return (
    <Container>
      <h1 className="area text-center">sports men area</h1>
      <Row className="mb-5 rowpd">
        <Col md={4} className="hov">
          <img src={imgsummer} className="img-fluid SUMMER1" />
          <p className=" sport11">sport t-shirt</p>
          <button className="btn-4">EXPLORE T-SHIRTS</button>
        </Col>

        <Col md={4} className="hov">
          <img src={imgsummer2} className="img-fluid SUMMER1" />
          <p className=" sport11" >shorts</p>
          <button className="btn-4">EXPLORE SHORTS</button>
        </Col>
        <Col md={4} className="hov">
          <img src={imgsummer3} className="img-fluid SUMMER1" />
          <p className=" p sport11">sport shoes</p>
          <button className="btn-4"> SPORTS SHOES </button>
        </Col>
      </Row>
    </Container>
  );
}

export default Container6;
