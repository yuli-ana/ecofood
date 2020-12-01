import { useState, useEffect } from "react";
import NavBar from "../components/shared/Navbar";
import MenuList from "../components/menu/MenuList";
import restService from "../services/restaurants";
import { useParams } from "react-router-dom";

const MenuPage = () => {
  const { id } = useParams();
  const [restaurants, setRestaurants] = useState([]);

  console.log(id);

  console.log(restaurants);
  // Find restaurant that matches url id
  const restaurantData = restaurants.find((rest) => rest._id === id);

  console.log(restaurantData);

  useEffect(() => {
    const getData = async () => {
      const data = await restService.getAll();
      setRestaurants(data);
    };

    getData();
  }, []);

  return (
    <>
      <NavBar signed />
      <h2 style={{ margin: "150px 0 50px", textAlign: "center" }}>
        {restaurantData?.name} Restaurant Menu
      </h2>
      <MenuList data={restaurantData} />
    </>
  );
};

export default MenuPage;
