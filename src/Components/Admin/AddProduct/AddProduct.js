import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { productContext } from "../../../Context/ProductContext";
import "./AddProduct.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [inpName, setInpName] = useState("");
  const [inpDescription, setInpDescription] = useState("");
  const [inpPrice, setInpPrice] = useState("");
  const [selectedFile, setSelectedFile] = useState({});
  const [inpCategory, setInpCategory] = useState("");
  let { addProduct } = useContext(productContext);

  // const navigate = useNavigate();
  // const [inputValues, setInputValues] = useState(initObj);

  function handleSave() {
    const newObj = new FormData();
    newObj.append("name", inpName);
    newObj.append("category", inpCategory);
    newObj.append("description", inpDescription);
    newObj.append("price", inpPrice);
    // newObj.append("image", selectedFile);
    addProduct(newObj);
  }

  // const alertToastify = () => {
  //   toast.error("Заполните все поля!", {
  //     position: "top-center",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: false,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // };

  // const handleChange = (e) => {
  //   let obj = {
  //     ...inputValues,
  //     [e.target.name]: e.target.value,
  //   };
  //   setInputValues(obj);
  //   // console.log(obj);
  // };

  // const clearInputs = () => {
  //   setInputValues(initObj);
  // };

  return (
    <form className="inp" onSubmit={(e) => handleSave(e)}>
      <div className="inputs">
        <div>
          <TextField
            sx={{ width: "400px", borderRadius: "5px" }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={inpName}
            onChange={(e) => setInpName(e.target.value)}
            type="text"
            name="name"
            className="inp1 m-1"
          />
        </div>
        <div>
          <TextField
            sx={{ width: "400px" }}
            id="outlined-basic"
            label="Category"
            variant="outlined"
            value={inpCategory}
            onChange={(e) => setInpCategory(e.target.value)}
            name="category"
            className="inp2 m-1"
          />
        </div>
        <div>
          <TextField
            sx={{ width: "400px" }}
            id="outlined-basic"
            label="Description"
            variant="outlined"
            value={inpPrice}
            onChange={(e) => setInpPrice(e.target.value)}
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
            value={inpDescription}
            onChange={(e) => setInpDescription(e.target.value)}
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
            // value={image}
            onChange={(e) => setSelectedFile(e.target.files[0])}
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
