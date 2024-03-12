import Alert from "react-bootstrap/Alert";

function Alert1() {
  return (
    <Alert variant="success">
      <Alert.Heading className="text-center">Welcome, ladies and gentlemen.</Alert.Heading>
      <p className="text-center">
        "We are delighted that you are reading this message, as it signifies your welcome to one of the finest libraries
        in the world."
      </p>
      <hr />
      <p className="mb-2 text-center">
        {" "}
        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
      </p>
    </Alert>
  );
}

export default Alert1;
