import { Select, InputLabel, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const DishSelect = ({ portionSize, setSize }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor="portion-size-native">Portion Size</InputLabel>
      <Select
        native
        label="size"
        value={portionSize}
        onChange={handleChange}
        inputProps={{
          name: "portion size",
          id: "portion-size-native",
        }}
        fullWidth
      >
        <option aria-label="none" value="" />
        <option value="too big">Too big</option>
        <option value="too small">Too small</option>
      </Select>
    </FormControl>
  );
};

export default DishSelect;
