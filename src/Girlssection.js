import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imgsummer from "./asset/shoes17.webp";

function Girl() {
  return (
    <Container fluid>
      <Row className=" gril-row ">
        <Col md={8}>
          <div className="text-white style-shoes bglight">
          
            <h1 className="sell mt-5">
              𝕔𝕙𝕖𝕔𝕜 𝕠𝕦𝕣 𝕟𝕖𝕨
              <br /> 𝕤𝕥𝕣𝕖𝕖𝕥 𝕘𝕚𝕣𝕝𝕤 𝕗𝕒𝕤𝕙𝕚𝕠𝕟
            </h1>
            <p className="py-5">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took <br></br>a galley of type
              and scrambled it to make a type specimen book
            </p>
        
          </div>
        </Col>
        <Col md={4}>
          <div className="rotate">
          <button className="btn1 ">EXPLORE</button>
          </div>
       
</Col>

    
      </Row>
    </Container>
  );
}

export default Girl;
