import React, { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ComponentArea from "./ComponentArea";
import Review from "./ComponentArea";
class SingleBook extends Component {
  state = { selected: false };

  render() {
    return (
      <>
        <Col className="g-3">
          <Card
            style={{ width: "18rem", height: "100%", border: this.state.selected ? "3px solid red" : "none" }}
            className=""
          >
            <Card.Img
              height={400}
              variant="top"
              src={this.props.parametro.img}
              onClick={() => {
                this.setState({ selected: !this.state.selected });
              }}
            />
            <Card.Body>
              <Card.Title>{this.props.parametro.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                <ListGroup />
              </Card.Text>
              <Card.Footer className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  onClick={() => {
                    this.setState({ selected: !this.state.selected });
                  }}
                >
                  {this.state.selected ? "Selected" : "Select"}
                </Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        {this.state.selected === true && <ComponentArea asin={this.props.parametro.asin} />}
      </>
    );
  }
}

export default SingleBook;
