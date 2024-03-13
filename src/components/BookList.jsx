import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

class BookList extends Component {
  state = {
    currentLibrary: this.props.parametro,
    selectedId: false,
  };

  render() {
    return (
      <Container>
        <Row className="mt-5 gy-5">
          {this.state.currentLibrary.map((libro) => (
            <Col lg={3} key={libro.asin}>
              <Card
                style={{
                  height: "100%",
                  border: this.state.selectedId === libro.asin ? "3px solid red" : "none",
                }}
                id="card"
              >
                <Card.Img variant="top" src={libro.img} onClick={() => this.setState({ selectedId: null })} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {libro.title}
                  </Card.Title>
                  <Card.Text>{libro.asin}</Card.Text>
                  <div className="mt-auto pt-4">
                    <Button onClick={() => this.setState({ selectedId: libro.asin })}>Seleziona</Button>
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

export default BookList;
