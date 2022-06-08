import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import EditProduct from "./Components/Admin/EditProduct/EditProduct";
import Login from "./Components/Auth/Login";
import HomePage from "./Components/HomePage/HomePage";
import Products from "./Components/Products/Products";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/list" element={<Products />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/edit/:id" element={<EditProduct />} />
    </Routes>
  );
};

export default MainRoutes;
