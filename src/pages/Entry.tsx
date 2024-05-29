import Nav from "@/components/Nav";
import { INavElement } from "@/interface/INav";
import {
  faBook,
  faHome,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./Home";
import Profile from "./Profile";
import Search from "./Search";
const tabs: INavElement[] = [
  {
    name: "Home",
    svg: <FontAwesomeIcon icon={faHome} />,
    page: Home,
  },
  {
    name: "Search",
    svg: <FontAwesomeIcon icon={faSearch} />,
    page: Search,
  },
  {
    name: "Collections",
    svg: <FontAwesomeIcon icon={faBook} />,
    page: () => {
      return (
        <div>
          <h1>Collections</h1>
        </div>
      );
    },
  },

  {
    name: "Profile",
    svg: <FontAwesomeIcon icon={faUser} />,
    page: Profile,
  },
];

function Entry() {
  return (
    <>
      <h1 className="text-3xl font-bold p-3">Logo</h1>
      <Nav elements={tabs}></Nav>
    </>
  );
}

export default Entry;
