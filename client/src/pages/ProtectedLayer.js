import React from "react";

import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import safeMaxLogo from "../design/safemax.png";

function ProtectedLayer({ children }) {
  const navItems = [
    {
      label: (
        <Link
          to={"/"}
          onClick={() => (window.location.href = "/")}
          className="safeMax-logo1"
        >
          Home
        </Link>
      ),
    },

    {
      label: <span className="safeMax-logo1">Services</span>,
      children: [
        {
          label: (
            <Link
             
              onClick={() => (window.location.href = "/Vulnerability-Assessment-Penetration-Testing")}
              className="nav-link "
            >
              Vulnerability Assessment & Penetration Testing (VAPT)
            </Link>
          ),
        },
        {
          label: (
            <Link 
            onClick={() => (window.location.href = "/Risk-Assessment-Management")}
            className="nav-link">
              Risk Assessment and Management
            </Link>
          ),
        },
        {
          label: (
            <Link
            onClick={() => (window.location.href = "/Cybersecurity-Consulting")}
            className="nav-link ">
              Cybersecurity Consulting
            </Link>
          ),
        },
        {
          label: (
            <Link 
            onClick={() => (window.location.href = "/Security-Awareness-Training")}

            className="nav-link">
              Security Awareness Training
            </Link>
          ),
        },
        {
          label: (
            <Link 
            onClick={() => (window.location.href = "/Incident-Response")}
            className="nav-link">
              Incident Response
            </Link>
          ),
        },
      ],
    },
    {
      label: (
        <Link
          
          onClick={() => (window.location.href = "/about-us")}
          className="safeMax-logo1"
        >
          About Us
        </Link>
      ),
    },
    {
      label: (
        <Link
          
          onClick={() => (window.location.href = "/contact-us")}
          className="safeMax-logo1"
        >
          Contact
        </Link>
      ),
    },
   
  ];
  return (
    <>
      <Layout>
        <Header
          className="d-flex justify-content-between"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            height: "6rem",
          }}
        >
          <h3 className="demo-logo text-white m-0">
            <Link
              to={"/"}
              onClick={() => {
                window.location.href = "/";
              }}
              className="safeMax-logo"
              style={{ display: "flex", alignItems: "center", color: "white" }}
            >
              <img
                src={safeMaxLogo}
                style={{ width: "4rem" }}
                alt="companyName"
              ></img>
              SafeMaxSecurity
            </Link>
          </h3>
          <Menu theme="dark" mode="horizontal" items={navItems}></Menu>
        </Header>
        <div style={{  minHeight: 380, background: "#fff" }}>
          {children}
        </div>
      </Layout>
    </>
  );
}

export default ProtectedLayer;
