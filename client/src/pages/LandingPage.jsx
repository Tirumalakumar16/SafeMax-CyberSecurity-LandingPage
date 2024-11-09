import React from "react";
// import SafeMax from '../design/safemax.png'

// import { test} from '../apicalls/user'
import { Carousel, Button, Input, Form, DatePicker, message } from "antd";
import { FacebookFilled, LinkedinFilled ,TwitterSquareFilled} from "@ant-design/icons";
import dayjs from "dayjs";
import {
  contentStyle1,
  contentStyle2,
  contentStyle3,
  contentStyle4,
  ourClientStyle1,
  ourClientStyle2,
  ourClientStyle3,
  ourClientStyle4,
  ourClientStyle5,
  ourClientStyle6,
  ourClientStyle7,
  ourClientStyle8,
  ourClientStyle9,
} from "../design/Content";
import { requestForAppointment } from "../apicalls/user";
function LandingPage({ setLoading }) {
  const submitForm = async (value) => {
    try {
      const res = await requestForAppointment(value);
      console.log(res);
      if (res.success) {
        message.success(res.message);

        // window.location.href = '/login'
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        message.error(res.message);
      }

      // navigate('/login')
    } catch (error) {
      message.error(error.message);
    }
  };

  const dateTimestamp = dayjs(new Date()).valueOf();
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      <div className="landing-page">
        {/* Hero Section */}
        {/* <section className="hero"> */}
        {/* <h1>SafeMax Security</h1> */}
        {/* <img src={SafeMax} alt="" className='logo' /> */}
        {/* <p>Your Trusted Cybersecurity Partner</p> */}
        {/* <button className="cta-button" onClick={handleSubmit}  >Schedule Appointment</button> */}

        {/* </section> */}
        <div>
          <Carousel
            dotPosition="top"
           
            
            autoplaySpeed={2000}
            autoplay={true}
          >
            <div>
              <div style={contentStyle3}>
                <h1>
                  Vulnerability Assessment and Penetrating Testing: <br /> to
                  identify and remediate security vulnerabilities.
                </h1>
                <h3 style={{ width: "70%" }}>
                  Vulnerability Assessment and Penetration Testing, or as
                  commonly referred to as VAPT, are two types of security
                  testing activities. Both have their own set of strengths, and
                  in order to achieve a thorough vulnerability analysis of the
                  systems under the scope of testing, they are combined together
                </h3>
                <button
                  className="button-safeMax"
                  onClick={() =>
                    (window.location.href =
                      "/Vulnerability-Assessment-Penetration-Testing")
                  }
                >
                  Read More
                </button>
              </div>
            </div>
            <div>
              <div style={contentStyle1}>
                <h1>
                  Empaneled by CERT-In for providing <br />
                  Information Security Auditing Service{" "}
                </h1>
                <h3 style={{ width: "50%" }}>
                  Partner with us to proactively safeguard your sensitive data
                  and maintain compliance with industry standards, giving you
                  the confidence to face the challenges of today's cybersecurity
                  landscape.
                </h3>
                <button className="button-safeMax">Read More</button>
              </div>
            </div>
            <div>
              <div style={contentStyle2}>
                <h1>
                  Digital Forensics Lab: Advancing solutions <br /> for
                  conducting investigation of escalating cybercrime
                </h1>
                <h3 style={{ width: "50%" }}>
                  A state-of-the-art Cyber Forensic Lab, one of its kind in{" "}
                  <br />
                  Western India that uses latest technology and authentic and{" "}
                  <br />
                  licenced software for analysis.
                </h3>
                <button className="button-safeMax">Read More</button>
              </div>
            </div>

            <div>
              <div style={contentStyle4} className="contentStyle4">
                <h1>Explore the Unseen Threats!</h1>
                <h3 style={{ width: "40%" }}>
                  In the vast ocean of the digital world, danger lurks beneath
                  the surface, hidden from plain sight. Cyber risks are like
                  hidden icebergs, potentially lurking just below the waterline,
                  threatening the very foundation of your business.
                </h3>
                <button className="button-safeMax">Read More</button>
              </div>
            </div>
          </Carousel>
        </div>

        {/* About Us Section */}
        <section className="about-us">
          <div>
            <h1
              style={{ fontSize: "4rem", color: "#000435", paddingTop: "4rem" }}
            >
              About Us
            </h1>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ paddingTop: "5rem" }}>
              <p className="about-us1" style={{ width: "auto" }}>
                Established in 2020,
                <strong className="stronger"> SafeMax Security</strong> has been
                at the forefront of cybersecurity innovation, offering
                comprehensive and tailored Vulnerability Assessment &
                Penetration Testing (VAPT) services to secure the digital assets
                of businesses worldwide. Our commitment to precision, proactive
                threat hunting, and adaptive security measures has earned us the
                trust of over 50 clients, including 22 international
                organizations across diverse industries. <br />
                <br />
                Leveraging advanced penetration testing methodologies and deep
                expertise in threat intelligence, we design and implement robust
                defense mechanisms to counter evolving cyber threats.
              </p>
              <button className="about-botton" onClick={()=> window.location.href="/about-us"}>Read More</button>
            </div>
            <div>
              <img
                src={
                  "https://img.freepik.com/free-vector/corporate-meeting-employees-cartoon-characters-discussing-business-strategy-planning-further-actions-brainstorming-formal-communication-seminar-concept-illustration_335657-2035.jpg?semt=ais_hybrid"
                }
                alt=""
                srcset=""
                style={{ width: "35rem", backgroundColor: "#f5f5f5" }}
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services">
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "3rem", color: "black" }}>Our Services</h1>
            <p style={{ fontSize: "1rem", width: "70%", marginLeft: "16rem" }}>
              <strong>SafeMax Security </strong>is one of the first and the best
              companies in India that has seamlessly combined the technological
              background and legal pillars in the cyber industry.
            </p>
          </div>

          <div style={{ display: "flex" }}>
            <div>
              <img
                src={
                  "https://img.freepik.com/free-vector/online-world-concept-illustration_114360-1092.jpg?ga=GA1.1.203946253.1731000080&semt=ais_hybrid"
                }
                alt=""
                style={{ color: "white" }}
              />
            </div>
            <div style={{ paddingLeft: "3rem", marginTop: "4rem" }}>
              <h1 style={{ fontSize: "2rem" }}>
                Vulnerability Assessment and Penetrating Testing
              </h1>
              <p style={{ width: "70%", fontSize: "16px" }}>
                A vulnerability assessment, often encompassing vulnerability
                scanning, is designed to help identify, classify and address
                security risks in your network, operating systems, firewalls,
                and hardware. It also provide on-going support and advice needed
                to mitigate any identified risks.
              </p>
              <button className="about-botton" onClick={()=> window.location.href="/Vulnerability-Assessment-Penetration-Testing"}>Read More</button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-us">
          <h2
            style={{
              fontSize: "3rem",
              paddingLeft: "9rem",
              color: "black",
            }}
          >
            Why Choose Us
          </h2>
          <div style={{ display: "flex" }}>
            <div>
              <img
                src={
                  "https://img.freepik.com/free-vector/man-working-with-social-media-icons_24877-50696.jpg?ga=GA1.1.203946253.1731000080&semt=ais_hybrid"
                }
                alt=""
                srcset=""
                style={{ width: "25rem" }}
              />
            </div>

            <div>
              <div
                style={{ marginLeft: "9rem", color: "black", fontSize: "20px" }}
              >
                <p>
                  Our company is here to provide you a wide range of services
                  which include:
                </p>
                <ul style={{ lineHeight: "3rem" }}>
                  <li>Skilled leadership</li>
                  <li>Professional service delivery</li>
                  <li>Highly trained staff who take pride in their work</li>
                  <li>Impressive track record with niche client portfolio</li>
                  <li>Customised services as per the client’s needs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <div
            style={{ textAlign: "center", fontSize: "2.5rem", color: "black" }}
          >
            <h1>Our Clients</h1>
          </div>

          <div style={{ display: "flex" }}>
            <div>
              <div className="ourClient" style={ourClientStyle1}></div>
            </div>
            <div>
              <div className="ourClient" style={ourClientStyle2}></div>
            </div>
            <div>
              <div className="ourClient" style={ourClientStyle3}></div>
            </div>
            <div>
              <div className="ourClient" style={ourClientStyle4}></div>
            </div>
            <div>
              <div className="ourClient" style={ourClientStyle5}></div>
            </div>
            <div>
              <div className="ourClient" style={ourClientStyle6}></div>
            </div>
            <div>
              <div className="ourClient" style={ourClientStyle7}></div>
            </div>
            <div>
              <div className="ourClient" style={ourClientStyle8}></div>
            </div>
            <div>
              <div className="ourClient" style={ourClientStyle9}></div>
            </div>
          </div>
        </section>

        {/* Contact/Appointment Section */}
        <section
          className="contact"
          style={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            style={{ textAlign: "center", fontSize: "2.3rem", color: "black" }}
          >
            <h2>
              Get
              <span style={{ borderBottom: "5px solid navyblue" }}> In T</span>
              ouch
            </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ marginTop: "3rem" }}>
              <img
                style={{ width: "33rem" }}
                src={
                  "https://img.freepik.com/free-vector/online-assistant-user-help-frequently-asked-questions-call-center-worker-cartoon-character-woman-working-hotline_335657-2336.jpg?ga=GA1.1.203946253.1731000080&semt=ais_hybrid"
                }
                alt=""
              />
            </div>
            <div>
              <header>
                <main className="main-area mw-500 text-center px-3">
                  <section className="right-section">
                    <Form
                      layout="vertical"
                      initialValues={{
                        date: dateTimestamp,
                      }}
                      onFinish={submitForm}
                      style={{
                        backgroundColor: "whitesmoke",
                        padding: "2rem",
                        borderTop: "5px solid black",
                      }}
                    >
                      <Form.Item
                        label="Name"
                        name="name"
                        className="d-block"
                        rules={[
                          { required: true, message: "Name is required!" },
                        ]}
                      >
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                        ></Input>
                      </Form.Item>
                      <Form.Item
                        label="Email"
                        name="email"
                        className="d-block"
                        rules={[
                          { required: true, message: "Email is required!" },
                        ]}
                      >
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                        ></Input>
                      </Form.Item>
                      <Form.Item
                        label="Appointment Date"
                        name="appointment"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                        getValueProps={(value) => ({
                          value: value && dayjs(Number(value)),
                        })}
                        normalize={(value) =>
                          value && `${dayjs(value).valueOf()}`
                        }
                      >
                        <DatePicker />
                      </Form.Item>
                      <Form.Item
                        label="Comment"
                        name="comment"
                        rules={[
                          {
                            required: true,
                            message: "Please input!",
                          },
                        ]}
                      >
                        <Input.TextArea placeholder="Enter your comments" />
                      </Form.Item>

                      <Form.Item>
                        <Button
                          block
                          type="primary"
                          htmlType="submit"
                          style={{ fontSize: "1rem", fontWeight: "600" }}
                        >
                          Submit
                        </Button>
                      </Form.Item>
                    </Form>
                  </section>
                </main>
              </header>
            </div>
          </div>
        </section>

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
                <span style={{ borderBottom: "2px solid white" ,fontSize: "2rem"}}>
                  USEFUL LINKS{" "}
                </span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column",fontSize:"1.2rem",lineHeight:"2rem" }}>
              <a href="/" style={{fontFamily:"times-new-roman",color:"white"}} className="home">Home</a>
              <a href="/about-us" style={{fontFamily:"times-new-roman",color:"white"}} className="home">About Us</a>
              <a href="/about-us" style={{fontFamily:"times-new-roman",color:"white"}} className="home">Contact Us</a>
              <a href="/" style={{fontFamily:"times-new-roman",color:"white"}} className="home">Press Release</a>
              <a href="/" style={{fontFamily:"times-new-roman",color:"white"}} className="home">Blog</a>
              </div>
            </div>
            <div>
              <h2>
                <span style={{ borderBottom: "2px solid white" ,fontSize: "2rem"}}>
                  SERVICES{" "}
                </span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column" ,lineHeight:"2rem",fontSize:"1.2rem",}}>
                <a href="/Vulnerability-Assessment-Penetration-Testing" style={{fontFamily:"times-new-roman",color:"white"}}>Vulnerability Assessment and Penetrating Testing</a>
                <a href="/" style={{fontFamily:"times-new-roman",color:"white"}} className="home">Risk Assessment and Management</a>
                <a href="/" style={{fontFamily:"times-new-roman",color:"white"}} className="home">Cyber Security Consulting</a>
                <a href="/Security-Awareness-Training" style={{fontFamily:"times-new-roman",color:"white"}} className="home">Security Awareness Training</a>
                <a href="/" style={{fontFamily:"times-new-roman",color:"white"}} className="home">Incidense Response  </a>
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
                  <a href="https://www.linkedin.com/company/safemax-security/posts/?feedView=all" target="blank" style={{fontFamily:"times-new-roman",marginLeft:"0.5rem",fontSize:"1rem",color:"white"}} className="home"> LinkedIn</a>
                </div>
                <div
                  style={{
                    height: "3rem",
                    fontSize: "2rem",
                  }}
                >
                  <TwitterSquareFilled />
                  <a href="/" style={{fontFamily:"times-new-roman",marginLeft:"0.5rem",fontSize:"1rem",color:"white"}} className="home">    Twitter</a>
                </div>
                <div
                  style={{
                    height: "3rem",
                    fontSize: "2rem",
                  }}
                >
                  <FacebookFilled />
                  <a href="/" style={{fontFamily:"times-new-roman",marginLeft:"0.5rem",fontSize:"1rem",color:"white"}} className="home">    Facebook</a>
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
      </div>
    </>
  );
}

export default LandingPage;
