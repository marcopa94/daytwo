import "./App.css";
import HeaderAndFooterExample from "./components/Footer";
import Navbar1 from "./components/Navbar";
import Alert1 from "./components/Alert1";
import "bootstrap/dist/css/bootstrap.min.css";
import Addtitle from "./components/Title";
import Card1 from "./components/Card1";
import Bottone from "./components/Bottone";

function App() {
  return (
    <>
      <Navbar1 />
      <Addtitle />
      <Alert1 />
      <Bottone name="CLICCAMI" />
      <Card1 />
      <HeaderAndFooterExample />
    </>
  );
}

export default App;
