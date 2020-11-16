import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/shared/Navbar";
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  TextField,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  Grid,
  Container,
} from "@material-ui/core";
import restService from "../services/restaurants";
import RestaurantList from "../components/searchRestaurants/RestaurantList";

const useStyles = makeStyles((theme) => ({
  padding: {
    padding: "100px 0 0",
  },
}));

const SearchRestaurants = () => {
  const [filtered, setFiltered] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);

  // Get all restaurants
  useEffect(() => {
    const getData = async () => {
      const data = await restService.getAll();
      console.log("data got returned", data);
      setRestaurants(data);
    };

    getData();
  }, []);

  const classes = useStyles();

  const filterArr = restaurants.filter((item) =>
    restaurants.length > 0 ? item.name.includes(filtered) : null
  );

  const handleChange = (e) => {
    setFiltered(e.target.value);
    setFilteredRest(filterArr);
  };

  console.log(filteredRest);

  return (
    <>
      <NavBar signed />
      <Grid justify="center" container className={classes.padding}>
        <Grid item xs={6}>
          <form action="">
            <TextField
              variant="outlined"
              label="Search Restaurants"
              onChange={handleChange}
              fullWidth
            />
          </form>
          <ul>
            {filteredRest.map((restaurant) => (
              <RestaurantList key={restaurant.id} restaurant={restaurant} />
            ))}
          </ul>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchRestaurants;
