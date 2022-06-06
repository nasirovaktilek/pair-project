import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer } from "react-bootstrap";
import "./AddProduct.css";

const initObj = {
  name: "",
  type: "",
  description: "",
  price: 0,
  image: "",
};

const AddProduct = () => {
  // const { addProduct } = useContext(productContext);
  const [inputValues, setInputValues] = useState(initObj);

  const handleChange = (e) => {
    let obj = {
      ...inputValues,
      [e.target.name]: e.target.value,
    };
    setInputValues(obj);
    console.log(obj);
  };

  const handleSave = (e) => {
    if (
      inputValues.title.trim() === "" ||
      inputValues.type.trim() === "" ||
      inputValues.description.trim() === "" ||
      inputValues.price.toString().trim() === "" ||
      inputValues.img1.trim() === "" ||
      inputValues.img2.trim() === "" ||
      inputValues.img3.trim() === ""
    ) {
      //   alertToastify();
      return;
    }
    e.preventDefault();
    // addProduct(inputValues);
    clearInputs();
  };

  const clearInputs = () => {
    setInputValues(initObj);
  };
  return (
    <form
      //   style={{ backgroundColor: "white" }}
      className="inp"
      onSubmit={(e) => handleSave(e)}
    >
      <div className="inputs">
        <div>
          <TextField
            // style={{ backgroundColor: "white" }}
            sx={{ width: "400px", borderRadius: "5px" }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={inputValues.name}
            onChange={(e) => handleChange(e)}
            name="name"
            className="inp1 m-1"
          />
        </div>
        <div>
          <TextField
            sx={{ width: "400px" }}
            id="outlined-basic"
            label="Type"
            variant="outlined"
            value={inputValues.type}
            onChange={(e) => handleChange(e)}
            name="type"
            className="inp2 m-1"
          />
        </div>
        <div>
          <TextField
            sx={{ width: "400px" }}
            id="outlined-basic"
            label="Description"
            variant="outlined"
            value={inputValues.description}
            onChange={(e) => handleChange(e)}
            name="description"
            className="inp3 m-1"
          />
        </div>
        <div>
          <TextField
            sx={{ width: "400px" }}
            id="outlined-basic"
            type="number"
            label="Price"
            variant="outlined"
            value={inputValues.price}
            onChange={(e) => handleChange(e)}
            name="price"
            className="inp4 m-1"
          />
        </div>
        <div>
          <TextField
            sx={{ width: "400px" }}
            id="outlined-basic"
            label="Image url"
            variant="outlined"
            value={inputValues.image}
            onChange={(e) => handleChange(e)}
            name="img1"
            className="inp5 m-1"
          />
        </div>
        <div>
          <Button
            onClick={handleSave}
            sx={{
              backgroundColor: "rgba(196, 159, 72, 0.791)",
            }}
            type="button"
            variant="contained"
            className="btnSave"
          >
            Добавить
          </Button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
