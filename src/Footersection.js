import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Container16() {
  return (
    <Container fluid>
      <Row className="  footerbg text-white pb-5">
        <Col md={3} className="mt-5 text-center">
          <h4>INFORMATION</h4>
          <ul type="none" className="classfooter">
            <li>
              <a href="#">PRIVACY POLICY</a>
            </li>
            <li>
              <a href="#">SALE</a>
            </li>
            <li>
              <a href="#">ACCOUNT</a>
            </li>
            <li>
              <a href="#">TERM'S</a>
            </li>
            <li>
              <a href="#">USER DATA</a>
            </li>
            <li>
              <a href="#">CARRER</a>
            </li>
            <li>
              <a href="#">BECOME A MEMBER?</a>
            </li>
          </ul>
        </Col>
        <Col md={3} className="mt-5 text-center">
          <h4>SHOP</h4>
          <ul type="none" className="classfooter">
            <li>
              <a href="#">shop by brand</a>
            </li>
            <li>
              <a href="#">shop by brand</a>
            </li>
            <li>
              <a href="#">shop by brand</a>
            </li>
            <li>
              <a href="#">shop by brand</a>
            </li>
            <li>
              <a href="#">shop by brand</a>
            </li>
            <li>
              <a href="#">shop by brand</a>
            </li>
            <li>
              <a href="#">shop by brand</a>
            </li>
          </ul>
        </Col>
        <Col md={3} className="mt-5 text-center">
          <h4>ABOUT US</h4>
          <ul type="none" className="classfooter">
            <li>
              <a href="#">term&condition</a>
            </li>
            <li>
              <a href="#">term&condition</a>
            </li>
            <li>
              <a href="#">term&condition</a>
            </li>
            <li>
              <a href="#">term&condition</a>
            </li>
            <li>
              <a href="#">term&condition</a>
            </li>
            <li>
              <a href="#">term&condition</a>
            </li>
            <li>
              <a href="#">term&condition</a>
            </li>
          </ul>
        </Col>
        <Col md={3} className="mt-5 text-center">
          <h4>OUR POLICY</h4>
          <ul type="none" className="classfooter">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">term&condition</a>
            </li>
            <li>
              <a href="#">term&condition</a>
            </li>
            <li>
              <a href="#">term&condition</a>
            </li>
            <li>
              <a href="#">term&condition</a>
            </li>
            <li>
              <a href="#">term&condition</a>
            </li>
            <li>
              <a href="#">term&condition</a>
            </li>
          </ul>
        </Col>
        <hr />

        <Col md={6}>
          <div className="pd-left">
            <p>NEWSLATER</p>
            <p>
              unistore has all of the best product
              <br />
              from all of top brand
            </p>
            <input
              type="emial"
              placeholder="your email"
              className="email"
            ></input>
          </div>
        </Col>
        <Col md={3}>
          <div className="pd-left2">
            <h1>OUR ADDRESS</h1>
            <p>218924872478</p>
            <p>
              <a href="#" className="address">
                kanpur city
              </a>
            </p>

            <h4>
              <a href="#" className="address">
                near KDMA SCHOOL{" "}
              </a>
            </h4>
          </div>
        </Col>

        <Col md={3}>
          <div className="pd-left2">
            <h1>OUR ADDRESS</h1>
            <p>218924872478</p>
            <p>
              <a href="#" className="address">
                kanpur city
              </a>
            </p>

            <h4>
              <a href="#" className="address">
                near KDMA SCHOOL{" "}
              </a>
            </h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Container16;
