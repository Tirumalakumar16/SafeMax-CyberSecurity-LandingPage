import React from "react";
import { vulnerabilityContentStyle3 } from "../design/Content";
import {
  LinkedinFilled,
  TwitterSquareFilled,
  FacebookFilled,
} from "@ant-design/icons";
import { Carousel } from "antd";
function AboutUs({setLoading}) {
    setTimeout(() => {
        setLoading(false);
      }
        , 1000);
  return (
    <>
      <div
        style={{
          backgroundImage: `url()`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "size",
        }}
      >
        <Carousel dotPosition="top" dots={false}>
          <div>
            <div style={vulnerabilityContentStyle3}>
              <h1 style={{ fontSize: "2.5rem" }}>
                Services <span>/</span> About Us
              </h1>
            </div>
          </div>
        </Carousel>
      </div>
      <div>
        <section className="about-us">
          <div style={{ display: "flex" }}>
            <div>
              <p
                className="about-us1"
                style={{ width: "70%", marginLeft: "7rem", textAlign: "left" }}
              >
                Established in 2020, <strong>SafeMax Security </strong>has been at the forefront
                of cybersecurity innovation, offering comprehensive and tailored
                Vulnerability Assessment & Penetration Testing (VAPT) services
                to secure the digital assets of businesses worldwide. Our
                commitment to precision, proactive threat hunting, and adaptive
                security measures has earned us the trust of over 50 clients,
                including 22 international organizations across diverse
                industries.
                <br />
                <br />
                Leveraging advanced penetration testing methodologies and deep
                expertise in threat intelligence, we design and implement robust
                defense mechanisms to counter evolving cyber threats. From
                identifying and remediating security vulnerabilities to
                delivering continuous risk assessments, SafeMax Security focuses
                on building resilient digital infrastructures that safeguard
                mission-critical systems and sensitive data.
              </p>
            </div>
            <div>
              <img
                src={
                  "https://img.freepik.com/premium-photo/illustration-vector-people-celebrate-new-year_1055299-357.jpg?ga=GA1.1.203946253.1731000080&semt=ais_hybrid"
                }
                alt=""
                srcset=""
                style={{ width: "40rem", backgroundColor: "#f5f5f5" }}
              />
            </div>
          </div>
        </section>

        <div
          className="about-us"
          style={{ width: "80%", marginLeft: "7rem", textAlign: "left" }}
        >
          <p>
            Our growth trajectory speaks volumes about our success. By the end
            of 2023, SafeMax Security was evaluated at 75 million dollars,
            reflecting our proven approach to cybersecurity and client-centric
            ethos. With our planned expansions and new technological
            integrations, we aim to exceed a 200-million-dollar evaluation in
            2024.
          </p>
        </div>

        <div
          className="about-us"
          style={{ width: "80%", marginLeft: "7rem", textAlign: "left" }}
        >
         
          <p>
            At SafeMax Security, we don’t just secure systems; we create
            strategies to elevate your digital resilience. Trust us to be your
            first and last line of defense against cyber adversaries.
          </p>

          <p>
            We help our clients to not only protect their IT infrastructure and
            data against cyber- attacks but also to run their IT security
            initiatives through our cyber security solution offerings. We help
            them to strategize and build a more secure environment. We help our
            clients in addressing their IT security needs right from the VAPT to
            complex security challenges that they face. We have served more than
            300 clients across multiple industries including government agencies
            and educational institutions.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div
          style={{
            display: "flex",
            margin: "5rem",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <h2>
              <span
                style={{ borderBottom: "2px solid white", fontSize: "2rem" }}
              >
                USEFUL LINKS{" "}
              </span>
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "1.2rem",
                lineHeight: "2rem",
              }}
            >
              <a
                href="/"
                style={{ fontFamily: "times-new-roman", color: "white" }}
                className="home"
              >
                Home
              </a>
              <a
                href="/about-us"
                style={{ fontFamily: "times-new-roman", color: "white" }}
                className="home"
              >
                About Us
              </a>
              <a
                href="/about-us"
                style={{ fontFamily: "times-new-roman", color: "white" }}
                className="home"
              >
                Contact Us
              </a>
              <a
                href="/"
                style={{ fontFamily: "times-new-roman", color: "white" }}
                className="home"
              >
                Press Release
              </a>
              <a
                href="/"
                style={{ fontFamily: "times-new-roman", color: "white" }}
                className="home"
              >
                Blog
              </a>
            </div>
          </div>
          <div>
            <h2>
              <span
                style={{ borderBottom: "2px solid white", fontSize: "2rem" }}
              >
                SERVICES{" "}
              </span>
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "2rem",
                fontSize: "1.2rem",
              }}
            >
              <a
                href="/Vulnerability-Assessment-Penetration-Testing"
                style={{ fontFamily: "times-new-roman", color: "white" }}
              >
                Vulnerability Assessment and Penetrating Testing
              </a>
              <a
                href="/"
                style={{ fontFamily: "times-new-roman", color: "white" }}
                className="home"
              >
                Risk Assessment and Management
              </a>
              <a
                href="/"
                style={{ fontFamily: "times-new-roman", color: "white" }}
                className="home"
              >
                Cyber Security Consulting
              </a>
              <a
                href="/Security-Awareness-Training"
                style={{ fontFamily: "times-new-roman", color: "white" }}
                className="home"
              >
                Security Awareness Training
              </a>
              <a
                href="/"
                style={{ fontFamily: "times-new-roman", color: "white" }}
                className="home"
              >
                Incidense Response{" "}
              </a>
            </div>
          </div>

          <div>
            <h2>
              <span
                style={{ borderBottom: "2px solid white", fontSize: "2rem" }}
              >
                FOLLOW US{" "}
              </span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  height: "3rem",
                  fontSize: "2rem",
                }}
              >
                <LinkedinFilled />
                <a
                  href="https://www.linkedin.com/company/safemax-security/posts/?feedView=all"
                  target="blank"
                  style={{
                    fontFamily: "times-new-roman",
                    marginLeft: "0.5rem",
                    fontSize: "1rem",
                    color: "white",
                  }}
                  className="home"
                >
                  {" "}
                  LinkedIn
                </a>
              </div>
              <div
                style={{
                  height: "3rem",
                  fontSize: "2rem",
                }}
              >
                <TwitterSquareFilled />
                <a
                  href="/"
                  style={{
                    fontFamily: "times-new-roman",
                    marginLeft: "0.5rem",
                    fontSize: "1rem",
                    color: "white",
                  }}
                  className="home"
                >
                  {" "}
                  Twitter
                </a>
              </div>
              <div
                style={{
                  height: "3rem",
                  fontSize: "2rem",
                }}
              >
                <FacebookFilled />
                <a
                  href="/"
                  style={{
                    fontFamily: "times-new-roman",
                    marginLeft: "0.5rem",
                    fontSize: "1rem",
                    color: "white",
                  }}
                  className="home"
                >
                  {" "}
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <p>&copy; 2024 SafeMax Security. All Rights Reserved.</p>
          <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/terms">Terms</a>
        </div>
      </footer>
    </>
  );
}

export default AboutUs;
