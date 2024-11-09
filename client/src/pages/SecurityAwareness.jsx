import React from 'react'
import { vulnerabilityContentStyle3 } from "../design/Content";
import { Button, Form, Input, DatePicker,message } from "antd";
import { LinkedinFilled, TwitterSquareFilled, FacebookFilled } from "@ant-design/icons";
import { requestForAppointment } from "../apicalls/user";
import dayjs from "dayjs";
import { Carousel } from "antd";

function SecurityAwareness({setLoading}) {
    const submitForm = async (value) => {
        try {
          const res = await requestForAppointment(value);
          console.log(res);
          if (res.success) {
            message.success(res.message);
    
            setTimeout(() => {
                window.location.reload();
              }, 500);

          } else {
            message.error(res.message);
          }
    
          
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
                Services <span>/</span> Security Awareness and Training
               
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
               Today no organization, large or small, is safe
from cyber-attacks Cyber Criminals know
that the easiest way to access secure networks
or steal data is to target people who already
have access and steal their login credentials.
With cyber criminals increasingly targeting
remote workers in order to gain control to
corporate networks, it is more important than
ever to ensure that your employees know how
to recognize when they are being attacked.

                <br />
                <br />Your employees are your first and primary
line of defence against online crime. That’s
where cyber security awareness training
comes into play, equipping your employees
with the knowledge and skills they need to
protect themselves from criminal elements.
              </p>
            </div>
            <div>
              <img
                src={
                  "https://img.freepik.com/free-vector/coach-speaking-before-audience-mentor-presenting-charts-reports-employees-meeting-business-training-seminar-conference-vector-illustration-presentation-lecture-education_74855-8294.jpg?ga=GA1.1.203946253.1731000080&semt=ais_hybrid"
                }
                alt=""
                srcset=""
                style={{ width: "40rem", backgroundColor: "#f5f5f5" }}
              />
            </div>
          </div>
          
        </section>
        <div className="about-us" style={{ width: "70%", marginLeft: "7rem", textAlign: "left" }}>
          <p>Effective security awareness training helps
employees understand proper cyber hygiene,
the security risks associated with their actions
and to identify cyber-attacks they may
encounter via email and the web.
</p>
          
        </div>
        <div className="about-us" style={{ width: "80%", marginLeft: "7rem", textAlign: "left" }}>
          <p>The training will educate your workforce about the nature of cyber threats, and the means to protect
against them. The training service is suitable for your entire workforce, from technical to non-technical
employees and contractors.
</p>

        </div>
        <div className="about-us" style={{ width: "90%", marginLeft: "7rem", textAlign: "left",lineHeight:"2.5rem" }}>
          <h3>What topics should be covered in Awareness training?</h3>
          <ul>
            <li>
            Current threats
            </li>
            <li>Attack red flags</li>
            <li>Defensive procedures</li>
            <li>Threat reaction plans</li>
        
           
          </ul>
        </div>
        <div className="about-us" style={{ width: "80%", marginLeft: "7rem", textAlign: "left" }}>
        
         <p>Security awareness training/ network security training should always be based on real-life attack
simulations that are in line with the most recent criminal trends. Hackers are always evolving their
approaches and technologies, and so your company must always be upgrading its defence training to
keep vulnerabilities low
</p>

        </div>
      </div>
      <section
          className="contact"
          style={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            style={{ textAlign: "center", fontSize: "2.5rem", color: "black" }}
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
              <a href="/" style={{fontFamily:"times-new-roman",color:"white"}} className="home">About Us</a>
              <a href="/" style={{fontFamily:"times-new-roman",color:"white"}} className="home">Contact Us</a>
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
                <a href="/" style={{fontFamily:"times-new-roman",color:"white"}} className="home">Security Awareness Training</a>
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
                  <a href="" style={{fontFamily:"times-new-roman",marginLeft:"0.5rem",fontSize:"1rem",color:"white"}} className="home">    Twitter</a>
                </div>
                <div
                  style={{
                    height: "3rem",
                    fontSize: "2rem",
                  }}
                >
                  <FacebookFilled />
                  <a href="" style={{fontFamily:"times-new-roman",marginLeft:"0.5rem",fontSize:"1rem",color:"white"}} className="home">    Facebook</a>
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
  )
}

export default SecurityAwareness