import React from "react";
import "./Footer.css";
import { Container, Form, Row, Col } from "react-bootstrap";
import {
  BsArrowRightShort,
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const nav = useNavigate();
  const about = () => {
    nav("/about");
  };
  const careers = () => {
    nav("/careers");
  };
  const contact = () => {
    nav("/contact");
  };
  const FAQ = () => {
    nav("/FAQ");
  };
  const ourStores = () => {
    nav("/our-stores");
  };
  const press = () => {
    nav("/press");
  };
  const returns = () => {
    nav("/returns-and-exchanges");
  };
  const reviews = () => {
    nav("/reviews");
  };
  const privacy = () => {
    nav("/privacy-policy");
  };

  return (
    <footer className="footer" data-testid="footer">
      <Container>
        <Row>
          <Col size="md" className="footer-subscription">
            <h1> Get the Best for Your Home</h1>
            <p> Sign up to know when we launch new products.</p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <input type="text" id="enter" placeholder="Email"></input>
                <button id="submit" data-testid="submit">
                  <BsArrowRightShort size={16} />
                </button>

                <Form.Text className="text-muted">
                  <p>
                    Please keep me up to date with Urban Nest news and offers by
                    email. I can unsubscribe at any time. I have read the Urban
                    Nest <span onClick={privacy}>Privacy Policy </span>
                  </p>
                </Form.Text>
              </Form.Group>
            </Form>

            <a href="https://facebook.com">
              <BsFacebook className="social-icons" />
            </a>
            <a href="https://twitter.com">
              <BsTwitter className="social-icons" />
            </a>
            <a href="https://pinterest.com">
              <BsPinterest className="social-icons" />
            </a>
            <a href="https://instagram.com">
              <BsInstagram className="social-icons" />
            </a>
          </Col>
          <Col size="md" className="footer-about">
            <h4>About</h4>
            <p>
              <p onClick={about}>About Us</p>
            </p>
            <p>
              <p onClick={reviews}>Reviews</p>
            </p>
            <p>
              <p onClick={ourStores}>Our Stores</p>
            </p>
            <p>
              <p onClick={press}>Press</p>
            </p>
          </Col>
          <Col size="md" className="footer-support">
            <h4>Support</h4>
            <p>
              <p onClick={FAQ}>FAQ</p>
            </p>
            <p>
              <p onClick={returns}>Returns/Exchanges</p>
            </p>
            <p>
              <p onClick={careers}>Careers</p>
            </p>
            <p>
              <p onClick={contact}>Contact Us</p>
            </p>
          </Col>
        </Row>
      </Container>
      <div className="copyright">
        <p>
          &copy; Urban Nest 2023<span onClick={privacy}> Privacy Policy</span>
        </p>
      </div>
    </footer>
  );
}
