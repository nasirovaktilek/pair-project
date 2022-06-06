import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { productContext } from "../../../Context/ProductContext";
import "./AddProduct.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initObj = {
  name: "",
  type: "",
  description: "",
  price: "",
  image: "",
};

const AddProduct = () => {
  const { addProduct } = useContext(productContext);
  const [inputValues, setInputValues] = useState(initObj);

  const alertToastify = () => {
    toast.error("Заполните все поля!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const handleChange = (e) => {
    let obj = {
      ...inputValues,
      [e.target.name]: e.target.value,
    };
    setInputValues(obj);
    // console.log(obj);
  };

  const handleSave = (e) => {
    if (
      inputValues.name.trim() === "" ||
      inputValues.type.trim() === "" ||
      inputValues.description.trim() === "" ||
      inputValues.price.toString().trim() === "" ||
      inputValues.image.trim() === ""
    ) {
      alertToastify();
      return;
    }
    e.preventDefault();
    addProduct(inputValues);
    clearInputs();
  };

  const clearInputs = () => {
    setInputValues(initObj);
  };

  return (
    <form className="inp" onSubmit={(e) => handleSave(e)}>
      <div className="inputs">
        <div>
          <TextField
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
            name="image"
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
