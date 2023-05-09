// import logo from './logo.svg';
import "./App.css";

import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headnav from "./Sectionnav";
import Slider from "./Section2slider";
import Midsection2 from "./Midsection4";
import Midsection3 from "./Section4product";
import Midsection4 from "./Sectionuvcloth";
import Midsection5 from "./Sectionsummer";
import Girl from "./Girlssection";
import Midsection6 from "./Sectionsport2";
import Shoesbanner from "./Sectionshoesban";
import Product from "./Sectionproslider";
import Midsection1 from "./Section3hoverimg";
import Banner from "./Sectionslider2";
import Favcollection from "./Sectionfavcol";
import Subscribe from "./Sectiobsusbcribe";
import Footter from "./Footersection";
import Brandlogos from "./Logoslider";

function App() {
  return (
    <div>
      <Headnav />
      <Slider />
      <Midsection6 />
      <Midsection2 />
      <Midsection3 />
      <Midsection4 />
      <Midsection5 />
      <Girl />
      <Shoesbanner />
      <Product />
      <Favcollection />
      <Midsection1 />
      <Banner />
      <Brandlogos />
      <Subscribe />
      <Footter />
    </div>
  );
}

export default App;
