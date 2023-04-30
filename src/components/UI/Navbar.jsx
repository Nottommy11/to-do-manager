import Header from "../Navbar/Header";
import Profile from "../Navbar/Profile";
import Search from "../Navbar/Search";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="top-nav">
      <Header />
      <Search />
      <Profile />
    </nav>
  );
};

export default Navbar;
