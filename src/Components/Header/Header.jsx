import { Link, NavLink,  } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <h1>this is header bokachoka</h1>
        <nav>
            <Link to='/'>Home</Link>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/about'>About</NavLink>
            <Link to='/users'>Users</Link>
            <Link to='/posts'>Posts</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
