import { useState } from "react";
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

  const handleChange = (e) => {
    setSize(e.target.value);
  };
  const handleSubmit = (e, id) => {
    e.preventDefault();
    console.log(size);
    console.log(id);
  };

  return (
    <Container>
      <form action="" onSubmit={(e) => handleSubmit(e, dish._id)}>
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
