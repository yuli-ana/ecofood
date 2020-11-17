import { useState, useEffect } from "react";
import NavBar from "../components/shared/Navbar";
import DishList from "../components/menu/DishList";
import restService from "../services/restaurants";
import { useParams } from "react-router-dom";

const Menu = () => {
  const { id } = useParams();
  const [restData, setData] = useState([]);
  console.log(id);

  // Find restaurant that matches url id
  const restaurantData = restData.find((rest) => rest._id === id);

  useEffect(() => {
    const getData = async () => {
      const data = await restService.getAll();
      setData(data);
    };

    getData();
  }, []);

  return (
    <>
      <NavBar signed />
      <h2 style={{ marginTop: "200px" }}>Menu</h2>
      <DishList data={restaurantData} />
    </>
  );
};

export default Menu;
