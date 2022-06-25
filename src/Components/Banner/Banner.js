import { useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Container>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div>
              <Row  xs={1} md={2} className="g-4 align-items-center">
                <Col>
                  <h1>Fave Sofa -Violet</h1>
                  <p>
                    The Fava sofa offers up a perfect look and feel when you
                    need a place to unwind. Soft to the touch yet durable enough
                    for your high-traffic space .The tailored box cushions and
                    bold track arms ensure lasting comfort.
                  </p>
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src="https://i.ibb.co/f0rRZGZ/banner-1.png"
                    alt="First slide"
                  />
                </Col>
              </Row>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-between align-items-center">
              <Row  xs={1} md={2} className="g-4 align-items-center">
                <Col>
                  <h1>Swivel round sofa -Brown</h1>
                  <p>
                    Swivel round sofa, complete with wheels, upholstered in
                    leather or velvet with a memory foam seat. A sofa
                    characterized by an elegant and particular tailoring work
                    decorating the shapes with rich and harmonious drapery.
                  </p>
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src="https://i.ibb.co/VVGt8dS/banner-2.png"
                    alt="Second slide"
                  />
                </Col>
              </Row>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-between align-items-center">
              <Row  xs={1} md={2} className="g-4 align-items-center">
                <Col>
                  <h1>Round Sofa Granite Grey</h1>
                  <p>
                    Eichholtz is a Dutch brand with worldwide fame in the design
                    world and has been in existence for over twenty years. They
                    stand for high quality, work with luxurious details and have
                    a very large collection of furniture and home accessories.
                    Be inspired by the decorative products from Eichholtz
                    that add something beautiful to any interior! .
                  </p>
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src="https://i.ibb.co/bW6G3hV/banner-3.png"
                    alt="Third slide"
                  />
                </Col>
              </Row>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Banner;
