import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const RestaurantList = ({ restaurant }) => {
  const { id, name, url } = restaurant;

  return (
    <li>
      <img src={url} alt="Restaurant" />
      <Link to={`/restaurants/${id}`}>{name}</Link>
    </li>
  );
};

export default RestaurantList;
