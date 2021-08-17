import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <Link to='/'>
        <div className="logo">Typing Speed Test</div>
      </Link>
      <div className="nav-links">
        <Link to="/about">About this app</Link>
      </div>
    </nav>
  );
};

export default Nav;
