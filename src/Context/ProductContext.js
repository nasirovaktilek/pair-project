import { ActionTypes } from "@mui/base";
import axios from "axios";
import React, { createContext, useReducer, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
// import { API } from "../Config";
export const productContext = createContext();

let URL = "https://unitedstates3.herokuapp.com/api/v1";

// const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: [],
  productsLength: 0,
  productDetails: {},
  productToEdit: {},
  user: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCTS_LENGTH":
      return { ...state, productsLength: action.payload };
    case "GET_PRODUCTS_DETAILS":
      return { ...state, productDetails: action.payload };
    case "EDIT_PRODUCT":
      return { ...state, productToEdit: action.payload };
    case "GET_USER_DATA":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  // console.log(state.products, "products inside context");

  const location = useLocation();
  console.log(location.search);

  const getProducts = async () => {
    const { data } = await axios(`${URL}/products${location.search}`);
    // // const { data } = await axios(`${API}/?page=${page}`);
    // // setCount(Math.ceil(data.count / 6));
    // dispatch({
    //   type: "GET_PRODUCTS",
    //   payload: data,

    // let { data } = await axios.get(`${URL}/products/`);
    // console.log(data.results);

    // const getProducts = async () => {
    //   // const { data } = await axios(`${API}${location.search}`);
    //   const { data } = await axios(`${API}/?page=${page}`);

    //   setCount(Math.ceil(data.count / 6));

    dispatch({
      type: "GET_PRODUCTS",
      payload: data.results,
    });
    // console.log(data);
  };

  const getProductsLength = async () => {
    const { data } = await axios(`${URL}`);
    dispatch({
      type: "GET_PRODUCTS_LENGTH",
      payload: data.length,
    });
  };

  const getProductsDetails = async (id) => {
    let { data } = await axios.get(`${URL}/products/${id}/`);
    console.log(data);
    dispatch({
      type: "GET_PRODUCTS_DETAILS",
      payload: data,
    });
  };

  const editProduct = async (id) => {
    let { data } = await axios(`${URL}/products/${id}`);
    dispatch({
      type: "EDIT_PRODUCT",
      payload: data,
    });
  };

  const getUserData = async (email) => {
    let { data } = await axios(`${URL}/login/${email}`);
    dispatch({
      type: "GET_USER_DATA",
      payload: data,
    });
  };

  const addProduct = async (newProduct) => {
    let access = localStorage.getItem("access");
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    }
    await axios.post(`${URL}/products/`, newProduct, config);
    getProducts();
  };

  // const deleteProduct = async (id) => {
  // let access = localStorage.getItem("access");
  // let config = {};
  // if (access) {
  //   config = {
  //     headers: { Authorization: `Bearer ${access}` },
  //   };
  // }
  //   await axios.delete(`${URL}/products/${id}/`);
  //   getProducts();
  // };
  //!__________________________________________________________________;
  const deleteProduct = async (id) => {
    try {
      let token = localStorage.getItem("access");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(`${URL}/products/${id}/`, config);
      getProducts();
      navigate("/list");
    } catch (error) {
      console.log(error);
    }
  };

  //!_________________________________________________________________;

  const saveProduct = async (newProduct) => {
    // let access = localStorage.getItem("access");
    // let config = {
    //   headers: { "Content-Type": "multipart/form-data" },
    // };
    // if (access) {
    //   config.headers.Authorization = `Bearer ${access}`;
    // }
    await axios.patch(`${URL}/products/${newProduct["id"]}/`, newProduct);
    getProducts();
    // getProductsDetails(newProduct.id);
  };

  // const fetchByParams = async (value) => {
  //   if (value === "all") {
  //     getProducts();
  //   } else if (
  //     value === "drinks" ||
  //     value === "dessert" ||
  //     value === "main dishes" ||
  //     value === "burger"
  //   ) {
  //     const { data } = await axios(`${URL}/type=${value}/products/?category=`);
  //   }
  //   dispatch({
  //     type: "GET_PRODUCTS",
  //     payload: data,
  //   });
  // };

  const searchFilter = async (value) => {
    const { data } = await axios(`${URL}/products?q=${value}`);
    console.log(data);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data.results,
    });
  };

  return (
    <productContext.Provider
      value={{
        products: state.products,
        productDetails: state.productDetails,
        // productsLength: state.productsLength,
        productToEdit: state.productToEdit,
        user: state.user,
        page,
        count,
        setPage,
        setCount,
        addProduct,
        getProducts,
        getProductsDetails,
        addProduct,
        deleteProduct,
        editProduct,
        saveProduct,
        getProductsLength,
        searchFilter,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
