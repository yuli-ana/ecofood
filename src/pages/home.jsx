import PropTypes from "prop-types";
import NavBar from "../components/shared/Navbar";
import Description from "../components/home/Description";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Description />
    </>
  );
};

export default HomePage;

HomePage.propTypes = {};
