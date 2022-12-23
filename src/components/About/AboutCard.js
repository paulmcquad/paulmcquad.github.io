import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="lblue">Paul McQuade </span>
            from <span className="lblue"> Swords Co.Dublin, Ireland.</span>
            <br /> I have a <span className="lblue">Higher Cert. in Electronic Engineering</span> from ITT Dublin.
            <br /> I have a <span className="lblue">Higher Cert. in Computer Programming/Computer Architecture</span> from Roslyn Park College.
            <br /> i have a <span className="lblue">Certificate in Retail Practice</span> from EVE Plantmarket.
            <br />
            
            <br /> I'm on both <span className="lblue">github and gitlab.com</span> coding sites.
            <br /> I'm getting into <span className="lblue">DataScience, BigData and coding competitions like ProjectEuler.net.</span>
            <br />
            <br />
            <br /><span className="lblue">Dev Ops & CI/CD:</span>
            <br />I have expert knowledge about <span className="lblue">Linux, MacOS, Unix and Windows. </span>
                  I can work in the <span className="lblue">Command Line/ Bash scripting.</span>
            <br />
            <br />
            <br />

            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Going to the Cinema - Movies @ Swords.
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Pop/Rock Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling - <span className="lblue">I have been to Málaga - Spain, Rock of Gibraltar,
                London and New York. I would love to travel more and maybe see Paris and Berlin.</span>
            </li>
          </ul>

          {/* <p style={{ color: "#0a5563" }}> */}
          <p>
            "If you want something done, Just go ahead and do it,
            never ask for permission only forgiveness if you have to.
            In the end sometimes you don't need to"{" "}
          </p>
          <footer className="blockquote-footer">William Binney, NSA</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
