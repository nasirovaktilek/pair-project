import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../../../Context/ProductContext";
import SaveIcon from "@mui/icons-material/Save";
import Image from "../../../assets/images/bg_1.jpg";

const EditProduct = () => {
  console.log("Edit page");
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
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          width: "85vh",
          borderRadius: "7px",
          border: "2px solid white",
        }}
      >
        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          value={inputValues.name}
          name="name"
          onChange={(e) => handleChange(e)}
          InputProps={{ style: { backgroundColor: "#cc9900" } }}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="type"
          variant="outlined"
          value={inputValues.type}
          name="type"
          onChange={(e) => handleChange(e)}
          InputProps={{ style: { backgroundColor: "#cc9900" } }}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="description"
          variant="outlined"
          value={inputValues.description}
          name="description"
          onChange={(e) => handleChange(e)}
          InputProps={{ style: { backgroundColor: "#cc9900" } }}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="price"
          variant="outlined"
          value={inputValues.price}
          name="price"
          onChange={(e) => handleChange(e)}
          InputProps={{ style: { backgroundColor: "#cc9900" } }}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="image"
          variant="outlined"
          value={inputValues.image}
          name="image"
          onChange={(e) => handleChange(e)}
          InputProps={{ style: { backgroundColor: "#cc9900" } }}
        />

        <Button
          type="submit"
          variant="contained"
          color="success"
          startIcon={<SaveIcon />}
          fullWidth={true}
          sx={{
            height: "45px",
            width: "120px",
          }}
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default EditProduct;
