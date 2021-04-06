import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import NavBar from "../components/shared/Navbar";
import { makeStyles } from "@material-ui/styles";
import { TextField, Grid, List } from "@material-ui/core";
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
  const [input, setInput] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const classes = useStyles();

  // Get all restaurants
  useEffect(() => {
    const getData = async () => {
      const data = await restService.getAll();

      // Error handling
      // if (response.status === 500) {
      //   console.log("Server error");
      // } else if (response.status === 400) {
      //   console.log("Bad request");
      // } else {
      //   return response.data;
      // }

      // Save restaurants in state
      setRestaurants(data);
    };

    getData();
  }, []);

  // Filter restaurants by input value for easier access to searched restaurant
  const filteredByInput = restaurants.filter((item) =>
    restaurants.length > 0 ? item.name.includes(input) : null
  );

  const handleChange = (e) => {
    // Get input value, update state
    setInput(e.target.value);
    // Set filtered restaurants
    setFiltered(filteredByInput);
  };

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
          <List className={classes.container} style={{ padding: 0 }}>
            {filtered.map((restaurant) => (
              <RestaurantItem key={restaurant._id} restaurant={restaurant} />
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchRestaurantsPage;
