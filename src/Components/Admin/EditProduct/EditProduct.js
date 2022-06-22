import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useParams, useState } from "react";
import { productContext } from "../../../Context/ProductContext";
import SaveIcon from "@mui/icons-material/Save";
import Image from "../../../assets/images/bg_1.jpg";
import "./EditProduct.css";
import { ToastContainer } from "react-bootstrap";

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
    newProduct.set("id", id);
    newProduct.set("name", inpName);
    newProduct.set("category", inpCategory);
    newProduct.set("price", inpPrice);
    newProduct.set("image", selectedFile);
    saveProduct(newProduct);
  }

  return (
    <h1>Hello</h1>
    // <>
    //   {inpName ? (
    //     <form className="inp" onSubmit={(e) => editItems(e)}>
    //       <div className="inputs">
    //         <div>
    //           <TextField
    //             sx={{ width: "400px", borderRadius: "5px" }}
    //             id="outlined-basic"
    //             label="Name"
    //             variant="outlined"
    //             value={inpName}
    //             onChange={(e) => setInpName(e.target.value)}
    //             type="text"
    //             name="name"
    //             className="inp1 m-1"
    //           />
    //         </div>
    //         <div>
    //           <TextField
    //             sx={{ width: "400px" }}
    //             id="outlined-basic"
    //             label="Category"
    //             variant="outlined"
    //             value={inpCategory}
    //             onChange={(e) => setInpCategory(e.target.value)}
    //             name="category"
    //             className="inp2 m-1"
    //           />
    //         </div>
    //         <div>
    //           <TextField
    //             sx={{ width: "400px" }}
    //             id="outlined-basic"
    //             label="Description"
    //             variant="outlined"
    //             value={inpPrice}
    //             onChange={(e) => setInpPrice(e.target.value)}
    //             name="description"
    //             className="inp3 m-1"
    //           />
    //         </div>
    //         <div>
    //           <TextField
    //             sx={{ width: "400px" }}
    //             id="outlined-basic"
    //             type="number"
    //             label="Price"
    //             variant="outlined"
    //             value={inpDescription}
    //             onChange={(e) => setInpDescription(e.target.value)}
    //             name="price"
    //             className="inp4 m-1"
    //           />
    //         </div>
    //         <div>
    //           <TextField
    //             sx={{ width: "400px" }}
    //             id="outlined-basic"
    //             label="Image url"
    //             variant="outlined"
    //             // value={image}
    //             onChange={(e) => setSelectedFile(e.target.files[0])}
    //             name="image"
    //             className="inp5 m-1"
    //           />
    //         </div>
    //         <div>
    //           <Button
    //             onClick={editItems}
    //             sx={{
    //               backgroundColor: "rgba(196, 159, 72, 0.791)",
    //             }}
    //             type="button"
    //             variant="contained"
    //             className="btnSave"
    //           >
    //             Добавить
    //           </Button>
    //           <ToastContainer
    //             position="top-center"
    //             autoClose={5000}
    //             hideProgressBar={false}
    //             newestOnTop={false}
    //             closeOnClick
    //             rtl={false}
    //             pauseOnFocusLoss
    //             draggable
    //             pauseOnHover
    //           />
    //         </div>
    //       </div>
    //     </form>
    //   ) : null}
    // </>
  );
};

export default EditProduct;
