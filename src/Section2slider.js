import Carousel from "react-bootstrap/Carousel";
import sliderimg1 from "./asset/slider2imgshoes.webp";
import slderimg2 from "./asset/boysshoes2.webp";
import sliderimg3 from "./asset/blackwomenimg.webp";
import sliderimg4 from "./asset/slider4watch.jpg";


function Slider1() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={sliderimg1} className="img-fluid d-block w-100 imgh" />

        <span className="headingwatch animate__animated animate__backInDown">
           <h1 >check our new product</h1> 
          <p className="paragraph4">we are added new luxery <br/> watches.</p>
        </span>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slderimg2} className="img-fluid d-block w-100 imgh" />
        

        <span className="headingwatch animate__animated animate__fadeInBottomLeft">
           <h1 >check our new product</h1> 
          <p className="paragraph4">we are added new luxery <br/> watches.</p>
        </span>
      </Carousel.Item>
      <Carousel.Item>
        <img src={sliderimg3} className="img-fluid d-block w-100 imgh" />

        <span className="headingwatch animate__animated animate__bounce">
           <h1 >check our new product</h1> 
          <p className="paragraph4">we are added new luxery <br/> watches.</p>
        </span>
      </Carousel.Item>

      <Carousel.Item>
        <img src={sliderimg4} className="img-fluid d-block w-100 imgh" />
        <span className="headingwatch animate__animated animate__rubberBand">
           <h1 >check our new product</h1> 
          <p className="paragraph4">we are added new luxery <br/> watches.</p>
        </span>
      </Carousel.Item>
     
    </Carousel>


  );
}

export default Slider1;



