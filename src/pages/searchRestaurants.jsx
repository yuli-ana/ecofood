import { useState, useEffect } from "react";
import NavBar from "../components/shared/Navbar";
import { makeStyles } from "@material-ui/styles";
import { TextField, Grid } from "@material-ui/core";
import restService from "../services/restaurants";
import RestaurantItem from "../components/searchRestaurants/RestaurantItem";

const useStyles = makeStyles((theme) => ({
  padding: {
    padding: "100px 0 0",
  },
  container: {
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: "repeat(12, 80px)",
    gridGap: theme.spacing(10),
  },
}));

const SearchRestaurantsPage = () => {
  const [filtered, setFiltered] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  const classes = useStyles();

  // Get all restaurants
  useEffect(() => {
    const getData = async () => {
      const data = await restService.getAll();
      console.log("data got returned", data);

      // Save data in state
      setRestaurants(data);
    };

    getData();
  }, []);

  // Filter restaurants by input value
  const filterArr = restaurants.filter((item) =>
    restaurants.length > 0 ? item.name.includes(filtered) : null
  );

  const handleChange = (e) => {
    // Get input value, update state
    setFiltered(e.target.value);
    // Set filtered restaurants
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
          <ul className={classes.container} style={{ padding: 0 }}>
            {filteredRest.map((restaurant) => (
              <RestaurantItem key={restaurant.id} restaurant={restaurant} />
            ))}
          </ul>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchRestaurantsPage;
