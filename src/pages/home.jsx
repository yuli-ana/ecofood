import { useState, useEffect } from "react";
import NavBar from "../components/shared/Navbar";
import restService from "../services/restaurants";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await restService.getAll();
      console.log("data got returned");
      setRestaurants(data);
    };

    getData();
  }, []);

  console.log(restaurants);

  return (
    <>
      <NavBar />
    </>
  );
};

export default Home;
