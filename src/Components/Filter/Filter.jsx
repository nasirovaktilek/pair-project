import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import React from "react";
import { Box } from "@mui/material";

const Filter = ({ type, setType }) => {
  return (
    <FormControl
      sx={{
        margin: "0 500px",
        marginTop: "150px",
        fontFamily: "Great Vibes",
        color: "#c49b63",
        textAlign: "center",
      }}
    >
      <FormLabel
        sx={{
          fontSize: "50px",
          fontFamily: "Great Vibes",
          color: "#c49b63",
          marginBottom: "50px",
        }}
        id="demo-row-radio-buttons-group-label"
      >
        MENU
      </FormLabel>
      <Box>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <FormControlLabel value="Drinks" control={<Radio />} label="DRINKS" />
          <FormControlLabel
            value="Dessert"
            control={<Radio />}
            label="DESSERTS"
          />
          <FormControlLabel
            value="Burger"
            control={<Radio />}
            label="BURGERS"
          />
          <FormControlLabel
            value="Main Dishes"
            control={<Radio />}
            label="MAIN DISHES"
          />
          <FormControlLabel value="All" control={<Radio />} label="ALL" />
        </RadioGroup>
      </Box>
    </FormControl>
  );
};
export default Filter;
