import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { FaBeer, FaFacebookF} from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";

function Section1() {
  return (
    <Navbar expand="lg" className="nav sticky-top">
      <Container>
        <Navbar.Brand href="#home">
          <span className="uni">𝖚𝖓𝖎𝖘𝖙𝖔𝖗𝖊 </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="color">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="color">
              shop
            </Nav.Link>
            <Nav.Link href="#home" className="color">
              shoes
            </Nav.Link>
            <Nav.Link href="#link" className="color">
              clothes
            </Nav.Link>
            <Nav.Link href="#link" className="color">

              <CiShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Section1;
