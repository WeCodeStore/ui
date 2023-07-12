import "./FAQ.css";
import { Container, Col, Row } from "react-bootstrap";

export default function FAQ() {
  return (
    <Container className="container-faq">
      <h1>FAQ</h1>
      <Row>
        <Col>
          Outdoor
          <p>
            <a href="#">Question?</a>
          </p>
          <p>
            <a href="#">Question?</a>
          </p>
        </Col>
        <Col>
          Furniture and Lighting
          <p>
            <a href="#">Question?</a>
          </p>
        </Col>
        <Col>
          Kitchen
          <p>
            <a href="#">Question?</a>
          </p>
          <p>
            <a href="#">Question?</a>
          </p>
          <p>
            <a href="#">Question?</a>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          Rugs
          <p>
            <a href="#">Question?</a>
          </p>
        </Col>
        <Col>
          Decor and Pillows
          <p>
            <a href="#">Question?</a>
          </p>
          <p>
            <a href="#">Question?</a>
          </p>
          <p>
            <a href="#">Question?</a>
          </p>
          <p>
            <a href="#">Question?</a>
          </p>
        </Col>
        <Col>
          Bed and Bath
          <p>
            <a href="#">Question?</a>
          </p>
          <p>
            <a href="#">Question?</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
