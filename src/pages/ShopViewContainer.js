import { Container, Row, Col } from "react-bootstrap";
import Product from "../components/Product";

const ShopViewContainer = () => {
  return (
    <div>
      <Container>
        <Row>
          {Array.from({ length: 3 }, (_, i) => (
            <Col key={i}>
              <Product />
            </Col>
          ))}
        </Row>
        <Row>
          {Array.from({ length: 3 }, (_, i) => (
            <Col key={i}>
              <Product />
            </Col>
          ))}
        </Row>
        <Row>
          {Array.from({ length: 3 }, (_, i) => (
            <Col key={i}>
              <Product />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ShopViewContainer;
