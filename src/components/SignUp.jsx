import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import Signup from "../assets/Signup.png";
import { useState } from "react";
const SignUp = ({ show, onHide }) => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => setIsLogin(!isLogin);
  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Body className="p-4">
        <div className="text-center mb-3">
          <p style={{ color: "green", fontSize: "0.9rem" }}>
            Let's learn, share & inspire each other with our passion for
            computer engineering. {isLogin ? "Sign in" : "Sign up"} now 🤘
          </p>
        </div>

        <Row>
          <Col md={6} sm={12}>
            <h5 className="fw-bold mb-3">
              {isLogin ? "Sign In" : "Create Account"}
            </h5>
            <Form>
              <Row className="g-0">
                {!isLogin && (
                  <Row className="g-0">
                    <Col>
                      <Form.Control type="text" placeholder="First Name" />
                    </Col>
                    <Col>
                      <Form.Control type="text" placeholder="Last Name" />
                    </Col>
                  </Row>
                )}
              </Row>
              <Form.Control type="email" placeholder="Email" />
              <Form.Control type="password" placeholder="Password" />
              {!isLogin && (
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  className="mb-3"
                />
              )}
              <Button variant="primary" className="w-100 mb-3 rounded-5">
                {isLogin ? "Sign In" : "Create Account"}
              </Button>

              {!isLogin && (
                <>
                  <Button
                    variant="outline-secondary"
                    className="w-100 mb-2 rounded-3"
                  >
                    <i className="fab fa-facebook"></i> Sign up with Facebook
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className="w-100 rounded-3"
                  >
                    <i className="fab fa-google"></i> Sign up with Google
                  </Button>
                </>
              )}

              {isLogin && (
                <>
                  <Button
                    variant="outline-secondary"
                    className="w-100 mb-2 rounded-3"
                  >
                    <i className="fab fa-facebook"></i> Sign in with Facebook
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className="w-100 rounded-3"
                  >
                    <i className="fab fa-google"></i> Sign in with Google
                  </Button>
                </>
              )}
            </Form>
          </Col>

          <Col
            md={6}
            className="d-none d-md-flex align-items-center justify-content-center"
          >
            <img src={Signup} alt="Signup Illustration" className="img-fluid" />
          </Col>
        </Row>

        <div className="text-end mt-2">
          <span className="text-muted">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <a
                  href="#"
                  className="text-primary fw-bold"
                  onClick={toggleForm}
                >
                  Sign Up
                </a>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-primary fw-bold"
                  onClick={toggleForm}
                >
                  Sign In
                </a>
              </>
            )}
          </span>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SignUp;
