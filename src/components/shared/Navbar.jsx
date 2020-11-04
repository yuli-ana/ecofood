import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/signin">Sign in</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default NavBar;
