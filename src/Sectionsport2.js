import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imgsummer from "./asset/girlsection.jpg";
import imgsummer2 from "./asset/mensectionimg.webp";

function Container7() {
  return (
    <Container fluid>
      <Row className=" rowcol">
        <p className="text-white text-center pt-5">10% DISCOUNT FOR REGISTERD USER & FREE SHIPPING ON ALL ORDERS PLUSE FREE RETURNS</p>
        <h1 className="text-center coll">SHOP BY CATAGORY</h1>
        <Col md={6}>
          <img src={imgsummer} className="img-fluid girl-boy" />
          <div className="fff">
            <button className="btn1">women</button>
            </div>
        </Col>

        <Col md={6} >
            <img src={imgsummer2} className="img-fluid  girl-boy" />
            <div className="fff">
            <button className="btn1">men</button>
            </div>
          

       
        </Col>
      </Row>
    </Container>
  );
}

export default Container7;
