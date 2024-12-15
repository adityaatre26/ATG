import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";
import search from "../assets/Search.png";

import { useState } from "react";
import SignUp from "./SignUp";
import "./Nav.css";
const Navbar = () => {
  const [showModal, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Container fluid className="bg-white py-2 navnav">
        <Row className="align-items-center justify-content-between">
          <Col className="text-start mx-3">
            <img
              src={logo}
              alt="Logo"
              className="img-fluid"
              style={{ maxWidth: "140px" }}
            />
          </Col>
          <Col className="d-flex justify-content-center">
            <div
              className="searchBar d-flex align-items-center border rounded-5 p-2"
              style={{ width: "300px", backgroundColor: "#f0f0f0" }}
            >
              <img
                src={search}
                alt="Search"
                className="img-fluid"
                style={{ width: "20px", marginRight: "10px" }}
              />
              <input
                type="text"
                className="border-0 p-0 w-100"
                placeholder="Search for your favorite groups in ATG"
                style={{
                  fontSize: "12px",
                  padding: "5px",
                  background: "transparent",
                }}
              />
            </div>
          </Col>
          <Col className="text-end login-btn">
            <button
              className="lg-button"
              style={{ border: "none", backgroundColor: "transparent" }}
              onClick={handleShow}
            >
              Create Account.{" "}
              <p
                style={{ display: "inline", color: "blue", fontWeight: "600" }}
              >
                It's free!
              </p>
            </button>
            <button className="mobile-button" onClick={handleShow}>
              Join Group
            </button>
          </Col>
        </Row>
      </Container>
      <SignUp show={showModal} onHide={handleClose} />
    </>
  );
};

export default Navbar;
