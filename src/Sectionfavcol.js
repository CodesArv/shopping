import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import whitetshirt from "./asset/whitetsirtpng.png";
import Backpack from "./asset/backpack.png";
import Raincoat from "./asset/raincoat.jpg";
import Jacket from "./asset/womens-elegant-double-breasted-army-green-wool-blend-coat-2.webp";
import { useEffect, useState } from "react";

import { FaFly, FaRegHeart } from "react-icons/fa";

function Container12() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const apiFetch =()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => {
      console.log(json.products)
     setData(json.products)
    })
    .catch(error=>{
      alert("data wrong")
    })
      }
useEffect(()=>{
  apiFetch()
},[])

  const showFunct = (key) => {
    setShow(!show);
  };
  let apiProduct = [
    { 
      id: "1",
      Name: "T-SHIRT'S",
      Price: 10,
      image:
        "http://localhost:3000/static/media/raincoat.3925653f783cfe2dae2e.jpg",
      date_added: 1496757350,
    },
    {
      id: "2",
      Name: "RAIN-COAT",
      Price: 40,
      image:
        "http://localhost:3000/static/media/whitetsirtpng.50de6df0bfb62ecf6dc0.png",
      inventory: 1,
      date_added: 1496757290,
    },
    {
      id: "3",
      Name: "BACKPACK",
      Price: 40,
      image:
        "http://localhost:3000/static/media/backpack.8e82526d164c15509ccf.png",
      inventory: 1,
      date_added: 1496757290,
    },
    {
      id: "4",
      Name: "BACKghfgfgghPACK",
      Price: 40,
      image:
        "http://localhost:3000/static/media/backpack.8e82526d164c15509ccf.png",
      inventory: 1,
      date_added: 1496757290,
    },
  ];

  return (
    <Container fluid>
      <Row className="my-5 text-center">
        <h3 className="all-cat">EXPLORE ALL CATEGORY'S</h3>
        {data.map((item) => (
          <>
            <Col md={3} className="my-5">
              <div class="card p-3 text-center px-4 card-hover">
                {show ? (
                  <div className="rela">
                    <div className="card1 text-center">{item.Price}</div>
                  </div>
                ) : (
                  ""
                )}
                <div class="user-image">
                  <img src={item.images[0]} className="img-fluid new-coll" />
                </div>
                <div class="user-content icon-rel">
                  <h5 class="my-3">{item.title}</h5>
                  <h5>{item.price}</h5>
                  <div className="icon">
                    <FaRegHeart
                      onClick={() => {
                        showFunct(item);
                      }}
                    />
                  </div>

                  <span>20% OFF</span>
                  <button className="cartbtn">EXPLORE</button>
                </div>
              </div>
            </Col>
          </>
        ))}
      </Row>
    </Container>
  );
}

export default Container12;
