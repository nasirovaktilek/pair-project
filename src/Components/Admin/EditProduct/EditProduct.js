import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../../../Context/ProductContext";
import SaveIcon from "@mui/icons-material/Save";
import Image from "../../../assets/images/bg_1.jpg";
import "./EditProduct.css";

const EditProduct = () => {
  // console.log("Edit page");
  const { productDetails, getProductsDetails, editProduct } =
    useContext(productContext);

  let { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getProductsDetails(id);
  }, []);

  const [inputValues, setInputValues] = useState(productDetails);

  const handleChange = (e) => {
    let obj = {
      ...inputValues,
      [e.target.name]: e.target.value,
    };
    setInputValues(obj);
  };

  const handleSave = (e) => {
    e.preventDefault();
    editProduct(id, inputValues);
    navigate("/list");
  };

  return (
    <Box
      sx={{
        margin: "0 auto",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        backgroundImage: `url(${Image})`,
      }}
    >
      <form
        onSubmit={(e) => handleSave(e)}
        style={{
          marginTop: "7%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "50%",
          borderRadius: "7px",
        }}
      >
        <TextField
          sx={{ width: "100%" }}
          label="Name"
          // className="inp1 m-1"
          id="outlined-basic"
          variant="outlined"
          value={inputValues.name}
          name="name"
          onChange={(e) => handleChange(e)}
          InputProps={{ style: { backgroundColor: "#7279754c" } }}
        />
        <br />
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Type"
          variant="outlined"
          value={inputValues.type}
          name="type"
          onChange={(e) => handleChange(e)}
          InputProps={{ style: { backgroundColor: "#7279754c" } }}
        />
        <br />
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Description"
          variant="outlined"
          value={inputValues.description}
          name="description"
          onChange={(e) => handleChange(e)}
          InputProps={{ style: { backgroundColor: "#7279754c" } }}
        />
        <br />
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Price"
          variant="outlined"
          value={inputValues.price}
          name="price"
          onChange={(e) => handleChange(e)}
          InputProps={{ style: { backgroundColor: "#7279754c" } }}
        />
        <br />
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Image"
          variant="outlined"
          value={inputValues.image}
          name="image"
          onChange={(e) => handleChange(e)}
          InputProps={{ style: { backgroundColor: "#7279754c" } }}
        />

        <Button
          sx={{
            margin: "20px auto",
            backgroundColor: "rgba(196, 159, 72, 0.791)",
            height: "45px",
            width: "120px",
          }}
          type="button"
          variant="contained"
          className="btnSave"
          startIcon={<SaveIcon />}
          fullWidth={true}

          // type="submit"
          // variant="contained"
          // color="success"
          // startIcon={<SaveIcon />}
          // fullWidth={true}
          // sx={{
          //   height: "45px",
          //   width: "120px",
          // }}
        >
          Save
        </Button>
      </form>
    </Box>
  );
};

export default EditProduct;
