import React from "react";
import { BrowserRouter } from "react-router-dom";
import PrimarySearchAppBar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <PrimarySearchAppBar />
      <MainRoutes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
