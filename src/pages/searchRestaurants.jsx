import { useState, useEffect } from "react";
import NavBar from "../components/shared/Navbar";
import restaurantService from "../services/restaurants";

const SearchRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  return (
    <>
      <NavBar minimalNavbar />
    </>
  );
};

export default SearchRestaurants;
