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

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col size="md" className="footer-subscription">
            <h3> Get the Best for Your Home</h3>
            <p> Sign up to know when we launch new products.</p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <input type="text" id="enter" placeholder="Email"></input>
                <button id="clear">
                  <BsArrowRightShort />
                </button>

                <Form.Text className="text-muted">
                  <p>
                    Please keep me up to date with Urban Nest news and offers by
                    email. I can unsubscribe at any time. I have read the Urban
                    Nest <a href="#!">Privacy Policy </a>
                  </p>
                </Form.Text>
              </Form.Group>
            </Form>
            <BsFacebook className="social-icons" />
            <BsTwitter className="social-icons" />
            <BsPinterest className="social-icons" />
            <BsInstagram className="social-icons" />
          </Col>
          <Col size="md" className="footer-about">
            <h5>About</h5>
            <p>
              <a href="#!" className="">
                About Us
              </a>
            </p>
            <p>
              <a href="#!" className="">
                Reviews
              </a>
            </p>
            <p>
              <a href="#!" className="">
                Our Stores
              </a>
            </p>
          </Col>
          <Col size="md" className="footer-support">
            <h5>Support</h5>
            <p>
              <a href="#!" className="">
                FAQ
              </a>
            </p>
            <p>
              <a href="#!" className="">
                Returns/Exchanges
              </a>
            </p>
            <p>
              <a href="#!" className="">
                Careers
              </a>
            </p>
            <p>
              <a href="#!" className="">
                Contact Us
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      <div>
        <p>
          &copy; Urban Nest 2023<a href="#!">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}
