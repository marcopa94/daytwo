import { Component } from "react";
import items from "../romance.json";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = { selected: false, librosingolo: items[0] };
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <Card style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                <Card.Img
                  variant="top"
                  src={this.state.librosingolo.img}
                  className="cover object-fit-cover h-100 w-25"
                />
                {this.state.librosingolo.title}{" "}
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default SingleBook;
