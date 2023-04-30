/* eslint-disable react/prop-types */
import Header from "../Navbar/Header";
import Profile from "../Navbar/Profile";
import Search from "../Navbar/Search";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="top-nav">
      <Header resetTab={props.resetTab} />
      <Search />
      <Profile />
    </nav>
  );
};

export default Navbar;
