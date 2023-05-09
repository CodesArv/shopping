import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import box2 from "./asset/slider4watch.jpg";
import shoesimg from "./asset/shoes1.webp";
import img3 from "./asset/boyswatch4.webp";

function Container4() {
  return (
    <Container fluid>
      <Row className="pt-5 pb-5">
        <h1 className="text-center our">EXPLORE OUR WORLD</h1>
        <p className="text-center">WATCHES AND SHOES</p>
        <Col md={8}>
          <div class="imageBox">
            <div class="imageInn">
              <img src={box2} className="img-fluid midimgheight2" />
            </div>
            <div class="hoverImg">
              <img src={img3} className="img-fluid midimgheight2" />
            </div>
            <h1 className="limted mt-5">
              LIMITED EDITION <br />
              <span className="watch">WATCH</span>
            </h1>

            <button className="btn-watch ">explore watch</button>
          </div>
        </Col>

        <Col md={4} className="mt-5">
          <img src={shoesimg} className="img-fluid midimgheight" />
          <button className="btn-watch2 ">explore shoes</button>
        </Col>
      </Row>
    </Container>
  );
}

export default Container4;
