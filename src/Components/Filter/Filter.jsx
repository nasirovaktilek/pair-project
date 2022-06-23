import React, { useContext, useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { productContext } from "../../Context/ProductContext";

import { Box } from "@mui/material";

const Filter = () => {
  const [category, setCategory] = useState("");
  const [searchParams, setSearchParams] = useState("");
  const { fetchByParams } = useContext(productContext);

  console.log(category, "category");
  useEffect(() => {
    let currentParams = Object.fromEntries([]);
    if (true) {
      fetchByParams(category);
    }
  }, [category]);

  return (
    <Box>
      <FormControl
        sx={{
          margin: "0 auto",
          // marginTop: "150px",
          paddingTop: "150px",
          fontFamily: "Great Vibes",
          color: "#c49b63",
          textAlign: "center",
          display: "block",
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
        <Box sx={{ margin: "0 auto" }}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            sx={{ margin: "0 auto", display: "block" }}
          >
            <FormControlLabel
              value="drinks"
              control={<Radio />}
              label="DRINKS"
            />
            <FormControlLabel
              value="dessert"
              control={<Radio />}
              label="DESSERTS"
            />
            <FormControlLabel
              value="burger"
              control={<Radio />}
              label="BURGERS"
            />
            <FormControlLabel
              value="main_dishes"
              control={<Radio />}
              label="MAIN DISHES"
            />
            <FormControlLabel value="all" control={<Radio />} label="ALL" />
          </RadioGroup>
        </Box>
      </FormControl>
    </Box>
  );
};
export default Filter;
