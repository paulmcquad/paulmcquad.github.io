import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={16} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="lblue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <p>
                I love programming and I have at least learnt
                something, I think… 🤷‍♂️
              </p>
              I'm a <b className="lblue">electronics and computer science graduate</b> from ITDublin and Roslyn Park.
              I have a willingness to learn new technologies.

              <br />
              <br />I am fluent in languages like
              <i>
                <b className="lblue"> HTML, CSS, Javascript/Typescript, Java and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="lblue">Web Apps and pages </b> and
                also in areas related to{" "}
                <b className="lblue">
                  Maths and Coding Languages.
                </b>
              </i>
              <br />
              <br />
              
              <p>I also use
              <b className="lblue">
                  {" "}
                  Modern CSS Library and Frameworks
                </b>
                  &nbsp; like 
                  <b className="lblue"> Bootstrap, Foundation and Tailwind CSS. </b>
              </p>

              
              Whenever possible, I also apply my passion for developing products
              with <b className="lblue">Node.js</b> and
              <i>
                <b className="lblue">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="lblue"> React.js, Vue.js and Angular.</b>
              </i>
              
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="lblue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/paulmcquad"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/paulmcquad"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/paulmcquad/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/paulmcquad"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/paulmcquad"
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
