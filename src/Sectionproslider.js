import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import product1 from "./asset/shoes11.webp";
import product2 from "./asset/shoes12.webp";
import product3 from "./asset/shoes13.webp";
import product4 from "./asset/shoes14.webp";
import product5 from "./asset/shoes15.webp";
import product6 from "./asset/shoes16.webp";
import product7 from "./asset/shoes17.webp";
import product8 from "./asset/shoes18.webp";
import product9 from "./asset/shoes19.webp";
import product10 from "./asset/shoes20.webp";
import product11 from "./asset/shoes21.webp";

function Section9() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Container fluid>
      <h3 className="text-center mt-3 bodyhead">
        check latest shoes collection
      </h3>
      <hr />
      <Row className="text-center py-5">
        <Carousel responsive={responsive} autoPlay="true">
          <div class="card">
            <img src={product1} className="img-fluid productheight" />
            <h1>AR JORDEN</h1>
            <p class="price">2700₹</p>

            <button>Add to Cart</button>
          </div>
          <div class="card">
            <img src={product2} className="img-fluid productheight" />
            <h1>TAP</h1>
            <p class="price">5500₹</p>

            <button>Add to Cart</button>
          </div>
          <div class="card">
            <img src={product3} className="img-fluid productheight" />
            <h1>NIKE</h1>
            <p class="price">1700₹</p>

            <button>Add to Cart</button>
          </div>
          <div class="card">
            <img src={product4} className="img-fluid productheight" />
            <h1>SPORTS</h1>
            <p class="price">3700₹</p>

            <button>Add to Cart</button>
          </div>

          <div class="card">
            <img src={product5} className="img-fluid productheight" />
            <h1>ADDIDAS</h1>
            <p class="price">1700₹</p>

            <button>Add to Cart</button>
          </div>

          <div class="card">
            <img src={product6} className="img-fluid productheight" />
            <h1>SPARK</h1>
            <p class="price">2999₹</p>

            <button>Add to Cart</button>
          </div>
          <div class="card">
            <img src={product7} className="img-fluid productheight" />
            <h1>WHITE</h1>
            <p class="price">5700₹</p>

            <button>Add to Cart</button>
          </div>

          <div class="card">
            <img src={product8} className="img-fluid productheight" />
            <h1>SPORTS</h1>
            <p class="price">7000₹</p>
            <button>Add to Cart</button>
          </div>

          <div class="card">
            <img src={product9} className="img-fluid productheight" />
            <h1>SPORTS</h1>
            <p class="price">7000₹</p>
            <button>Add to Cart</button>
          </div>

          <div class="card">
            <img src={product10} className="img-fluid productheight" />
            <h1>SPORTS</h1>
            <p class="price">7000₹</p>
            <button>Add to Cart</button>
          </div>

          <div class="card">
            <img src={product11} className="img-fluid productheight" />
            <h1>SPORTS</h1>
            <p class="price">7000₹</p>
            <button>Add to Cart</button>
          </div>

          <div class="card">
            <img src={product8} className="img-fluid productheight" />
            <h1>SPORTS</h1>
            <p class="price">7000₹</p>
            <button>Add to Cart</button>
          </div>
        </Carousel>
      </Row>
    </Container>
  );
}

export default Section9;
