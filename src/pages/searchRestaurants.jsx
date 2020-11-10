import NavBar from "../components/shared/Navbar";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  padding: {
    paddingTop: "100px",
  },
}));

const SearchRestaurants = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar signed />
      <p className={classes.padding}>Search Restaurants</p>
    </>
  );
};

export default SearchRestaurants;
