import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../src/Components/Cart/Cart";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import EditProduct from "./Components/Admin/EditProduct/EditProduct";
import Login from "./Components/Auth/Login";
import HomePage from "./Components/HomePage/HomePage";
import Payment from "./Components/Payment/Payment";
import ProductDetails from "./Components/Products/Details";
import Products from "./Components/Products/Products";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/list" element={<Products />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/edit/:id" element={<EditProduct />} />
<<<<<<< HEAD
      {/* <Route path="/payment" element={<Payment />} /> */}
=======
      <Route path="/payment" element={<Payment />} />
>>>>>>> af461e7567f826c257643895d78cf1f9be38f205
    </Routes>
  );
};

export default MainRoutes;
