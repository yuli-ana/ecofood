import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardHeader,
  Avatar,
  Button,
  List,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles({
  media: {
    height: 150,
  },
  avatar: {
    backgroundColor: "#FF385C",
  },
  list: {
    listStyle: "none",
    gridColumnEnd: "span 3",
  },
});

const RestaurantList = ({ restaurant }) => {
  const classes = useStyles();
  const { _id, name, url } = restaurant;
  const firstLetter = name[0];

  return (
    <List className={classes.list}>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="restaurant" className={classes.avatar}>
              {firstLetter}
            </Avatar>
          }
          title={name}
        />
        <CardMedia className={classes.media} image={url} title="Restaurant" />
        <Button
          fullWidth
          component={RouterLink}
          to={`/restaurants/${_id}`}
          color="primary"
          size="large"
        >
          review
        </Button>
      </Card>
    </List>
  );
};

export default RestaurantList;
