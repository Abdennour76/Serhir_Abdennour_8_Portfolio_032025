import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A <span className="purple"> PROPOS </span> DE MOI
            </h1>
            <p className="home-about-body">
            J’ai récemment découvert le développement web… et ça a été le coup de foudre : chaque ligne de code me donne envie d’en apprendre encore plus ! 💻✨
              <br />
              <br />j’ai acquis des compétences en 
              <i>
                <b className="purple">  HTML, CSS, JavaScript, React, et en gestion d’API REST. </b>
              </i>
              <br />
              <br />
              Je suis motivé par &nbsp;
              <i>
                <b className="purple">la création d’interfaces modernes </b> et{" "}
                <b className="purple">
                performantes.
                </b>
              </i>
              <br />
              <br />
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
            <h1>CONTACTER MOI</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Abdennour76"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abdennour-serhir-184903302/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
