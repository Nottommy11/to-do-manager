/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
const Header = (props) => {
  return (
    <h1 className="title" onClick={props.resetTab}>
      To Do Manager
    </h1>
  );
};

export default Header;
