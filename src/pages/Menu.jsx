import { useState, useEffect } from "react";
import NavBar from "../components/shared/Navbar";
import DishList from "../components/menu/DishList";
import restService from "../services/restaurants";
import { useParams } from "react-router-dom";

const MenuPage = () => {
  const { id } = useParams();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await restService.getAll();
      setRestaurants(data);
    };

    getData();
  }, []);

  // Find restaurant that matches url id
  const restaurantData = restaurants.find((rest) => rest.id === id);

  console.log(restaurantData);

  return (
    <>
      <NavBar signed />
      <h2 style={{ margin: "150px 0 50px", textAlign: "center" }}>
        {restaurantData?.name} Restaurant Menu
      </h2>
      <DishList data={restaurantData} />
    </>
  );
};

export default MenuPage;
