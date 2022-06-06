import React from "react";
import { BrowserRouter } from "react-router-dom";
import PrimarySearchAppBar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer/Footer";
import AuthContextProvider from "./Context/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <PrimarySearchAppBar />
        <MainRoutes />
        <Footer />
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
