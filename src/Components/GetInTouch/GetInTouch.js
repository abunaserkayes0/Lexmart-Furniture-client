import { Col, Container, Row } from "react-bootstrap";

const GetInTouch = () => {
  return (
    <div className="py-3 bg-light">
      <Container fluid>
        <Row className="align-items-center justify-content-center">
          <Col sm={12} md={7} lg={7}>
            <div>
              <img
                className="w-100"
                src="https://i.ibb.co/pQHwXxF/getintouch.png"
                alt=""
              />
            </div>
          </Col>
          <Col sm={12} md={5} lg={5}>
            <div>
              <h1 className="fs-1 fw-bold">Get In Touch</h1>
              <p className="text-mutes fst-italic">
                Definitions of get in touch,establish communication with
                someone,touch base connect, establish a rapport or relationship.
              </p>
              <input type="email" placeholder="Enter Your Email" />
              <button className="btn bg-primary text-white d-block my-2">
                Subscribe
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GetInTouch;
