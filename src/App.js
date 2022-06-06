import React from "react";
import { BrowserRouter } from "react-router-dom";
import PrimarySearchAppBar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductContextProvider from "./Context/ProductContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ProductContextProvider>
          <PrimarySearchAppBar />
          <MainRoutes />
        </ProductContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
