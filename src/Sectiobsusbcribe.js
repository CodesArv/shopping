import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function Container14() {
  return (
    <Container fluid>
      <Row className="pt-5 pb-5 cube-row">
        <Col md={12} className="text-center text-white">
          <div className="my-5">
            <h1>
              SING UP AND GET 10% OFF <br />
              YOUR NEXT ORDER
            </h1>
            <h4>
              By subscribing to the newsletter, you agree to our Privacy Policy.
            </h4>
          </div>

          <input
            type="email"
            placeholder="enter email"
            className="email mb-5"
          ></input>
          <div>
            <button className="btn1">Subscribe</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Container14;
