import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaMediumM } from "react-icons/fa"; 

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I’m Alima Usmani from Uttar Pradesh, currently learning at the Navgurukul
              Bangalore Campus. Here, I've explored various technologies and gained skills in
              Python, HTML, CSS, JavaScript, React.js, Node.js, Next.js, and Bootstrap.
              <br />
              <br />
              I fell in love with programming and I have at least learned something, I think… 🤷‍♂️
              <i>
                <b className="purple"> I am fluent in classics like JavaScript and Go.</b>
              </i> My field of interest is building new web technologies and products.
              <br />
              <br />
              Whenever possible, I apply my passion for developing products with <b className="purple">Node.js</b> and modern
              JavaScript libraries and frameworks such as <b className="purple">React.js and Next.js.</b>
              <br />
              <br />
              I’m always excited to take on new challenges, expand my skills, and continue my journey in the tech world!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/alimausmani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://medium.com/@alimausmani21/my-own-space-in-2024-7d3e01b4ac4e"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaMediumM />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alima-usmani/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/accounts/login/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
