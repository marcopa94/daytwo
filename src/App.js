import "./App.css";
import HeaderAndFooterExample from "./components/Footer";
import Navbar1 from "./components/Navbar";
import Alert1 from "./components/Alert1";
import "bootstrap/dist/css/bootstrap.min.css";
import Addtitle from "./components/Title";

import SingleBook from "./components/SingleBook";

import items from "./history.json";
import ListBook from "./components/ListBook";
import Search from "./components/Search";
import fantasy from "./fantasy.json";
import { Container, ListGroup } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar1 />
      <Addtitle />
      <Alert1 />
      {/*    <Card1 /> */}
      <Search />
      <Container>
        <SingleBook parametro={items[2]} />
      </Container>
      <ListBook params={fantasy} /> <ListGroup />
      <HeaderAndFooterExample />
    </>
  );
}

export default App;
