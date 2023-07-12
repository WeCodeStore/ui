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
import InputGroup from "react-bootstrap/InputGroup";

export default function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <Container>
        <Row>
          <Col size="md" className="footer-subscription">
            <h1> Get the Best for Your Home</h1>
            <p> Sign up to know when we launch new products.</p>
            <Form>
              <InputGroup className="mb-3" controlId="formBasicEmail">
                <input type="text" id="enter" placeholder="Email"></input>
                <button id="submit" data-testid="submit">
                  <BsArrowRightShort size={20} />
                </button>

                <Form.Text className="text-muted">
                  <p>
                    Please keep me up to date with Urban Nest news and offers by
                    email. I can unsubscribe at any time. I have read the Urban
                    Nest <a href="/privacy-policy">Privacy Policy </a>
                  </p>
                </Form.Text>
              </InputGroup>
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
              <a href="/about-us" className="">
                About Us
              </a>
            </p>
            <p>
              <a href="#!" className="">
                Reviews
              </a>
            </p>
            <p>
              <a href="/our-stores" className="">
                Our Stores
              </a>
            </p>
            <p>
              <a href="/press" className="">
                Press
              </a>
            </p>
          </Col>
          <Col size="md" className="footer-support">
            <h4>Support</h4>
            <p>
              <a href="/FAQ" className="">
                FAQ
              </a>
            </p>
            <p>
              <a href="/returns-and-exchanges" className="">
                Returns/Exchanges
              </a>
            </p>
            <p>
              <a href="/careers" className="">
                Careers
              </a>
            </p>
            <p>
              <a href="contact-us" className="">
                Contact Us
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      <div>
        <p>
          &copy; Urban Nest 2023<a href="/privacy-policy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}
