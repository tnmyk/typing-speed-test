import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div className="logo">Typing Test</div>
      <div className="nav-links">
          <Link to='/'>About</Link>
      </div>
    </nav>
  );
};

export default Nav;
