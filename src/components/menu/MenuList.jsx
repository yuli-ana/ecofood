import DishItem from "./MenuItem";
import { BlockReserveLoading } from "react-loadingg";
import { List } from "@material-ui/core";

const MenuList = ({ data }) => {
  console.log(data);
  return (
    <List>
      {!data ? (
        <BlockReserveLoading />
      ) : (
        data.dishes.map((dish) => {
          return <DishItem key={dish._id} dish={dish} />;
        })
      )}
    </List>
  );
};

export default MenuList;
