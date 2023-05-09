import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import hoodie from "./asset/hoodie.png";

function Container6() {
  return (
    <Container >

      <Row className="mb-5">
        <Col md={5} className="mt-5">
          <div className="margin">
            <h1 className="uv">
    
              UV PROTECTIVE <br />CLOTHES 
            </h1>
            <p className="hood-lor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ellent,
              esque eget massa ac urna finibus fringilla nonpon mauris sit amet
              nisl in nunc pharetra.
            </p>
            <button className="btn-watch4">Hoodies</button>
            </div>
        </Col>

        <Col md={7}>
          <img src={hoodie} className="img-fluid jackimg hod" />
        </Col>
      </Row>
    </Container>
  );
}

export default Container6;
