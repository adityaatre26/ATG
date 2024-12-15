import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import "./Content.css";
import join from "../assets/Join.png";
import post1 from "../assets/Post1.png";
import post2 from "../assets/Post2.png";
import post3 from "../assets/Post3.png";
import Sarthak from "../assets/Sarthak.png";
import shareIcon from "../assets/shareIcon.png";
import Sarah from "../assets/Sarah.png";
import Ronal from "../assets/Ronal.png";
import JosNPfp from "../assets/Joseph&Pfp.png";

const Content = () => {
  return (
    <Container fluid className="bg-white py-4 all-content">
      <Row className="align-items-start justify-content-between">
        <Col xs={12} md={8} className="content-column">
          <div className="filters">
            <a href="#">All Posts(32)</a>
            <a href="#" className="text-muted">
              Article
            </a>
            <a href="#" className="text-muted">
              Event
            </a>
            <a href="#" className="text-muted">
              Education
            </a>
            <a href="#" className="text-muted">
              Job
            </a>
          </div>

          {[post1, post2].map((post, index) => (
            <Card key={index} style={{ width: "100%", marginBottom: "1rem" }}>
              <Card.Img variant="top" src={post} />
              <Card.Body>
                <Card.Text>{["✍️ Article", "🔬️ Education"][index]}</Card.Text>
                <Card.Title style={{ fontSize: "1.4rem" }}>
                  {
                    [
                      "What if famous brands had regular fonts? Meet RegulaBrands!",
                      "Tax Benefits for Investment under National Pension Scheme launched by Government",
                    ][index]
                  }
                </Card.Title>

                <Card.Text style={{ fontSize: "1rem", marginBottom: "2rem" }}>
                  I’ve worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </Card.Text>
                <div className="postInfo">
                  <div className="postProfl d-flex align-items-center">
                    <img src={[Sarthak, Sarah][index]} />
                    <p className="text-muted">
                      {["Sarthak Kamra", "Sarah West"][index]}
                    </p>
                  </div>
                  <div className="viewsNshares d-flex">
                    <p>1.4k Views</p>
                    <img src={shareIcon} className="mx-3" />
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}

          <Card style={{ width: "100%", marginBottom: "1rem" }}>
            <Card.Body>
              <Card.Img
                variant="top"
                src={post3}
                style={{ marginBottom: "1rem" }}
              />
              <Card.Text>🗓️ Meetup</Card.Text>
              <Card.Title style={{ fontSize: "1.4rem" }}>
                Finance & Investment Elite Social Mixer @Lujiazui
              </Card.Title>

              <Card.Text style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                Fri, 12 Oct, 2018
              </Card.Text>
              <Card.Text style={{ fontSize: "1rem" }}>
                Ahmedabad, India
              </Card.Text>
              <Button variant="outline-danger" className="w-100 mb-3">
                Visit the Website
              </Button>
              <div className="postInfo">
                <div className="postProfl d-flex align-items-center">
                  <img src={Ronal} />
                  <p className="text-muted">Ronal Jones</p>
                </div>
                <div className="viewsNshares d-flex">
                  <p>1.4k Views</p>
                  <img src={shareIcon} className="mx-3" />
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "100%", marginBottom: "1rem" }}>
            <Card.Body>
              <Card.Text>💼️ Job</Card.Text>
              <Card.Title style={{ fontSize: "1.4rem" }}>
                Software Developer
              </Card.Title>

              <Card.Text style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                Innovaccer Analytics Private Ltd.
              </Card.Text>
              <Card.Text style={{ fontSize: "1rem" }}>Noida, India</Card.Text>
              <Button variant="outline-success" className="w-100 mb-3">
                Apply on TimesJobs
              </Button>
              <div className="postInfo">
                <div className="postProfl d-flex align-items-center">
                  <img src={JosNPfp} />
                  <p className="text-muted">Joseph Gray</p>
                </div>
                <div className="viewsNshares d-flex">
                  <p>1.4k Views</p>
                  <img src={shareIcon} className="mx-3" />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col
          md={4}
          className="other-column d-flex flex-column justify-content-start align-items-start my-3 d-none d-md-flex"
        >
          <Form.Select className="select-button" style={{ maxWidth: "9rem" }}>
            <option>Write a Post</option>
          </Form.Select>
          <Button variant="primary">
            <img
              src={join}
              alt=""
              style={{ paddingBottom: "4px", marginRight: "4px" }}
            />{" "}
            Join Group
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
