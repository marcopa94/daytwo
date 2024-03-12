import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import items from "../history.json";
import Fantasy from "../fantasy.json";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

class Card1 extends Component {
  state = {
    currentLibrary: items,
  };

  render() {
    return (
      <Container>
        <Button onClick={() => this.setState({ currentLibrary: Fantasy })}>cliccami</Button>
        <Row className="mt-5 gy-5">
          {this.state.currentLibrary.map((libro) => (
            <Col lg={3} key={libro.asin}>
              <Card style={{ height: "100%" }} id="card">
                <Card.Img variant="top" src={libro.img} />
                <Card.Body className="d-flex flex-column ">
                  <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {libro.title}
                  </Card.Title>
                  <Card.Text>{libro.asin}</Card.Text>
                  <div className="mt-auto pt-4">
                    <Button variant="outline-danger" className="btn mt-3 d-flex">
                      Scopri di più
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Card1;
