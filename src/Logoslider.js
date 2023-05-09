import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Nike from "./asset/logonike.jpg";
import Rebook from "./asset/Reebok_Vector_Classic_Log2.jpg";
import Addidas from "./asset/adidas_PNG8.png";
import Col from "react-bootstrap/Col";

function Section17() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Container fluid>
      <hr />
      <Row className="text-center py-5">
        <Carousel responsive={responsive} autoPlay="true">
          <Col md={3}>
            <img src={Nike} className=" imgbrand " />
          </Col>

          <Col md={3}>
            <img src={Addidas} className=" imgbrand " />
          </Col>

          <Col md={3}>
            <img src={Addidas} className=" imgbrand " />
          </Col>

          <Col md={3}>
            <img src={Nike} className=" imgbrand " />
          </Col>

          <Col md={3}>
            <img src={Addidas} className=" imgbrand " />
          </Col>

          <Col md={3}>
            <img src={Addidas} className=" imgbrand " />
          </Col>

          <Col md={3}>
            <img src={Rebook} className=" imgbrand " />
          </Col>

          <Col md={3}>
            <img src={Rebook} className=" imgbrand " />
          </Col>
        </Carousel>
      </Row>
    </Container>
  );
}

export default Section17;
