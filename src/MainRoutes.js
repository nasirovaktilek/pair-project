import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../src/Components/Cart/Cart";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import EditProduct from "./Components/Admin/EditProduct/EditProduct";
import Login from "./Components/Auth/Login";
import HomePage from "./Components/HomePage/HomePage";
import ProductDetails from "./Components/Products/Details";
import Products from "./Components/Products/Products";
import Registration from "./Components/Registration/Registration";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/list" element={<Products />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/edit/:id" element={<EditProduct />} />
    </Routes>
  );
};

export default MainRoutes;
