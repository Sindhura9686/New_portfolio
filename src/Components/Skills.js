import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container,Row,Col } from "react-bootstrap";
import meter1 from "../Components/Assets/img/meter1.svg";
import meter2 from "../Components/Assets/img/meter2.svg";
import meter3 from "../Components/Assets/img/meter3.svg";
import colorSharp from "../Components/Assets/img/color-sharp.png";

export const Skills =()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

 return(
<section className="skill" id="skills">
    <Container>
        <Row>
            <Col>
            <div className="skill-bx">
            <h2>
                Skills
            </h2>
            <p>These are technologies with which I am familiar. As a developer, I am constantly looking for new technologies to master in order to widen my horizons and identify the ones that best meet the demands of my clients.</p>
            <Carousel responsive={responsive} className="skill-slider">
                <div className="item">
                    <img src={meter2} alt="Image"/>
                    <h5>React js</h5>
                </div>
                <div className="item">
                    <img src={meter2} alt="Image"/>
                    <h5>BTP Workflows</h5>
                </div>
                <div className="item">
                    <img src={meter3} alt="Image"/>
                    <h5>Analog Electronics</h5>
                </div>
            </Carousel>
            </div>
            </Col>
        </Row>
    </Container>
    <img className="background-image-left" src={colorSharp}/>
</section>
 )   
}