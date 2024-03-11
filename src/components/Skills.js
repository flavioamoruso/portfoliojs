import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Skills = () => {
  return (
    <>
      <section className="introduce-skill">
        <h2>Le mie skills</h2>
        <p style={{ marginTop: "14px" }}>
          Scrivo codice usando i linguaggi seguenti:
          HTML,CSS,JAVASCRIPT,PHP,REACT.JS,TYPESCRIPT
        </p>
      </section>

      <CardGroup className="div">
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      {/* <div className="card">
          <div className="header">My Skills</div>
          <div className="body">
            <div className="skill">
              <div className="skill-name html">HTML</div>
              <div className="skill-level">
                <div style={{ width: "90%" }} className="skill-percent"></div>
              </div>
              <div className="skill-percent-number">90%</div>
            </div>
            <div className="skill">
              <div className="skill-name css">CSS</div>
              <div className="skill-level">
                <div style={{ width: "80%" }} className="skill-percent"></div>
              </div>
              <div className="skill-percent-number">80%</div>
            </div>
            <div className="skill">
              <div className="skill-name js">JavaScript</div>
              <div className="skill-level">
                <div style={{ width: "75%" }} className="skill-percent"></div>
              </div>
              <div className="skill-percent-number">75%</div>
            </div>
          </div>
        </div> */}
    </>
  );
};

export default Skills;
