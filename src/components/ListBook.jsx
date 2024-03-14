import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = function (props) {
  return (
    <Container>
      <Row>
        {props.params.map((book) => {
          return <SingleBook parametro={book} key={book.id} />;
        })}
      </Row>
    </Container>
  );
};

export default BookList;
