import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imgsummer from "./asset/shoes17.webp";

function Shoescont() {
  return (
    <Container fluid>
      <Row className=" rowcol rowh">
        <Col md={8}>
          <img src={imgsummer} className="img-fluid shoesbanimg" />
        </Col>

        <Col md={4}>
          <div className="text-white style-shoes">
            <p  className="text-white ">RUN DIVISION</p>
          <h1 className="sell">MOST SELLING SHOE'S</h1>
          <p className="py-5">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book
          </p>
          <button className="btn1">SHOES</button>
          </div>
     
        </Col>
      </Row>
    </Container>
  );
}

export default Shoescont;
