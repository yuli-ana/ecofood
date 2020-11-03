import { useState, useEffect } from "react";
import NavBar from "../components/shared/Navbar";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  return <NavBar />;
};

export default Home;
