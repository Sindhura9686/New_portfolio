import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../Components/Assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Resume from "../Components/Assets/resume.pdf";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["FrontEnd Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleClick = () => {
    window.open(Resume, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi! I'm Sindhu`}{" "}
              <span
                className="txt-rotate"
                dataPeriod="1000"
                data-rotate='[ "FrontEnd Developer"]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p>
              I am a passionate front-end developer with a keen eye for creating visually appealing and user-friendly web experiences,
              I have strong foundation in HTML, CSS, and JavaScript.Good team player with positive attitude.
            </p>
            {/* <button onClick={() => console.log('connect')}>Resume<ArrowRightCircle size={25} /></button> */}
            <button onClick={handleClick} >
              <h2>Resume</h2>
              <ArrowRightCircle size={25} />
            </button>
           
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
