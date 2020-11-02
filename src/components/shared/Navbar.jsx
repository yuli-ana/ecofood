import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
      <Link to="/restaurant">Restaurant</Link>
    </div>
  );
};

export default NavBar;
