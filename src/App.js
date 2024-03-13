import "./App.css";
import HeaderAndFooterExample from "./components/Footer";
import Navbar1 from "./components/Navbar";
import Alert1 from "./components/Alert1";
import "bootstrap/dist/css/bootstrap.min.css";
import Addtitle from "./components/Title";
import Card1 from "./components/Card1";
import Bottone from "./components/Bottone";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import items from "./history.json";
import fantasy from "./fantasy.json";
import romance from "./romance.json";
import scifi from "./scifi.json";
import Search from "./components/Search";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar1 />
      <Addtitle />
      <Alert1 />

      {/*    <Card1 /> */}

      <Search />

      <SingleBook parametro={items[2]} />
      <BookList parametro={fantasy} />
      <HeaderAndFooterExample />
    </>
  );
}

export default App;
