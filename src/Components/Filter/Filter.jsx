import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import React, { useEffect, useState } from "react";

const Filter = ({ type, setType }) => {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Menu</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <FormControlLabel value="Drinks" control={<Radio />} label="Drinks" />
        <FormControlLabel
          value="Desserts"
          control={<Radio />}
          label="Desserts"
        />
        <FormControlLabel value="Burger" control={<Radio />} label="Burgers" />
        <FormControlLabel
          value="Main Dishes"
          control={<Radio />}
          label="Main Dishes"
        />
        <FormControlLabel value="All" control={<Radio />} label="All" />
      </RadioGroup>
    </FormControl>
  );
};
export default Filter;