import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../components/shared/Navbar";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const history = useHistory();

  return (
    <>
      <NavBar />
    </>
  );
};

export default Home;
