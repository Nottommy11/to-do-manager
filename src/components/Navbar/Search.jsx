import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." className="search-input" />
      <button type="submit" className="search-btn">
        <BsSearch className="search-icon" />
      </button>
    </div>
  );
};

export default Search;
