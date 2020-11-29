import { useState, useContext } from "react";
import { ListItem, Button, Grid, Container } from "@material-ui/core";
import { Context } from "../../App";
import userService from "../../services/restaurants";
import DishSelect from "./DishSelect";

const DishItem = ({ dish }) => {
  const [portionSize, setSize] = useState("");
  const [userId, setUserId] = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newDish = {
      name: dish.name,
      price: dish.price,
      portionSize,
      id: dish.id,
    };

    const addDish = await userService.createDish(newDish, userId);

    console.log(addDish);
  };

  return (
    <Container>
      <form action="" onSubmit={handleSubmit}>
        <Grid container>
          <Grid container item xs={8} alignItems="center">
            <Grid item xs={2}>
              <ListItem>{dish.name}</ListItem>
            </Grid>
            <Grid item xs={3}>
              ${dish.price}
            </Grid>
            <Grid item xs={6}>
              <DishSelect portionSize={portionSize} setSize={setSize} />
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

export default DishItem;
