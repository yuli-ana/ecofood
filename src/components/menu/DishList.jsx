import { useState, useContext } from "react";
import {
  List,
  ListItem,
  Button,
  Grid,
  Select,
  InputLabel,
  Container,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { BlockReserveLoading } from "react-loadingg";
import { Context } from "../../App";
import userService from "../../services/restaurants";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const DishList = ({ data }) => {
  return (
    <List>
      {!data ? (
        <BlockReserveLoading />
      ) : (
        data.dishes.map((dish) => {
          return <ListIt key={dish._id} dish={dish} />;
        })
      )}
    </List>
  );
};

const ListIt = ({ dish }) => {
  const classes = useStyles();
  const [size, setSize] = useState("");
  const [userId, setUserId] = useContext(Context);

  const handleChange = (e) => {
    setSize(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newDish = {
      name: dish.name,
      price: dish.price,
      size: size,
      id: dish.id,
    };

    const addDish = await userService.createDish(newDish, userId);

    console.log(addDish);
  };

  return (
    <Container>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <Grid container>
          <Grid container item xs={8} alignItems="center">
            <Grid item xs={2}>
              <ListItem>{dish.name}</ListItem>
            </Grid>
            <Grid item xs={3}>
              ${dish.price}
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="portion-size-native">Size</InputLabel>
                <Select
                  native
                  label="size"
                  value={size}
                  onChange={handleChange}
                  inputProps={{
                    name: "portion size",
                    id: "portion-size-native",
                  }}
                  fullWidth
                >
                  <option aria-label="None" value="" />
                  <option value="too big">Too big</option>
                  <option value="too small">Too small</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container item xs={4} alignItems="center">
            <Button
              type="submit"
              color="primary"
              size="small"
              variant="outlined"
            >
              Leave feedback
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default DishList;
