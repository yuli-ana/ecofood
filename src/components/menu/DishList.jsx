import { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import DishItem from "./DishItem";
import { BlockReserveLoading } from "react-loadingg";

const DishList = ({ data }) => {
  const [open, setOpen] = useState(false);
  console.log(data);

  const handleClick = () => {
    setOpen((state) => !state);
  };

  return (
    <List>
      {!data ? (
        <BlockReserveLoading />
      ) : (
        data.dishes.map((dish) => {
          return <ListIt key={dish.name} dish={dish} onClick={handleClick} />;
        })
      )}
    </List>
  );
};

const ListIt = ({ dish, onClick }) => {
  return <ListItem key={dish.name}>{dish.name}</ListItem>;
};

export default DishList;
