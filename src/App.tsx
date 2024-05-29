import "./index.css";
import Nav from "./components/Nav";
import { INavElement } from "./interface/INav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBook } from "@fortawesome/free-solid-svg-icons";
import Home from "./pages/Home";
const tabs: INavElement[] = [
  {
    name: "Home",
    svg: <FontAwesomeIcon icon={faHome} />,
    page: Home,
  },
];
function App() {
  return <Nav elements={tabs}></Nav>;
}

export default App;
