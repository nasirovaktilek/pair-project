import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../../Context/ProductContext";
import SaveIcon from "@mui/icons-material/Save";
import Image from "../../../assets/images/bg_1.jpg";
import "./EditProduct.css";
import { ToastContainer } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import { TextField } from "@mui/icons-material";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";

const EditProduct = () => {
  // console.log("Edit page");
  const { productToEdit, saveProduct, editProduct } =
    useContext(productContext);
  const { id } = useParams();
  const [inpName, setInpName] = useState("");
  const [inpDescription, setInpDescription] = useState("");
  const [inpPrice, setInpPrice] = useState("");
  const [inpCategory, setInpCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState(productToEdit.image);

  useEffect(() => {
    editProduct(id);
  }, []);

  useEffect(() => {
    setInpName(productToEdit.name);
    setInpDescription(productToEdit.description);
    setInpPrice(productToEdit.price);
    setInpCategory(productToEdit.category);
  }, [productToEdit]);

  function editItems() {
    let newProduct = new FormData();
    // newProduct.append("id", id);
    newProduct.append("name", inpName);
    newProduct.append("category", inpCategory);
    newProduct.append("price", inpPrice);
    newProduct.append("image", selectedFile);
    newProduct.append("description", inpDescription);
    saveProduct(newProduct, id);
  }

  return (
    <>
      {inpName ? (
        <form className="inp" onSubmit={(e) => editItems(e)}>
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
                value={inpDescription}
                onChange={(e) => setInpDescription(e.target.value)}
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
                value={inpPrice}
                onChange={(e) => setInpPrice(e.target.value)}
                name="price"
                className="inp4 m-1"
              />
            </div>
            <div>
              <TextField
                sx={{ width: "400px" }}
                id="outlined-basic"
                type="file"
                label="IMG"
                variant="outlined"
                onChange={(e) => setSelectedFile(e.target.files[0])}
                name="image"
                className="inp5 m-1"
              />
            </div>
            <div>
              <Button
                onClick={editItems}
                sx={{
                  backgroundColor: "rgba(196, 159, 72, 0.791)",
                }}
                type="button"
                variant="contained"
                className="btnSave"
              >
                ??????????????????
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
      ) : null}
    </>
  );
};

export default EditProduct;
