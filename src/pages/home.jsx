import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../components/shared/Navbar";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const history = useHistory();

  const handleUserClick = () => {
    history.push("/user");
  };

  const handleRestaurantClick = () => {
    history.push("/restaurant");
  };

  return (
    <>
      <NavBar />
      <button onClick={() => handleUserClick()}>User</button>
      <button onClick={() => handleRestaurantClick()}>Restaurant</button>
    </>
  );
};

export default Home;
