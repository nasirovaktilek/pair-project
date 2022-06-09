import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../../../Context/ProductContext";

const EditProduct = () => {
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
    <form onSubmit={(e) => handleSave(e)}>
      <TextField
        id="outlined-basic"
        label="name"
        variant="outlined"
        value={inputValues.name}
        name="name"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="type"
        variant="outlined"
        value={inputValues.type}
        name="type"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="description"
        variant="outlined"
        value={inputValues.description}
        name="description"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="price"
        variant="outlined"
        value={inputValues.price}
        name="price"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="image"
        variant="outlined"
        value={inputValues.image}
        name="image"
        onChange={(e) => handleChange(e)}
      />
      <Button type="submit" variant="contained">
        Delete
      </Button>
      <Button type="submit" variant="contained">
        Edit
      </Button>
    </form>
  );
};

export default EditProduct;
