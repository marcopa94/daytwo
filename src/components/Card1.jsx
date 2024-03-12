import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import items from "../history.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

function Card1() {
  return (
    <Container>
      <Row className="mt-5 gy-5">
        {items.map((libro) => (
          <Col lg={3} key={libro.asin}>
            <Card style={{ height: "100%" }} id="card">
              <Card.Img variant="top" src={libro.img} />
              <Card.Body className="d-flex flex-column ">
                <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {libro.title}
                </Card.Title>
                <Card.Text>{libro.asin}</Card.Text>
                <div className="mt-auto pt-4">
                  <Button variant="outline-danger" className="btn mt-3  d-flex ">
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

export default Card1;
