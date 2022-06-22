import axios from "axios";
import React, { createContext, useReducer, useState } from "react";
import { useLocation } from "react-router-dom";
// import { API } from "../Config";
export const productContext = createContext();

let URL = "https://unitedstates3.herokuapp.com/api/v1";

// const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: [],
  productDetails: {},
  productToEdit: {},
  user: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
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

  // console.log(state.products, "products inside context");

  const location = useLocation();
  // console.log(location.search);

  const getProducts = async (id) => {
    let { data } = await axios(`${URL}/products/`);

    // const getProducts = async () => {
    //   // const { data } = await axios(`${API}${location.search}`);
    //   const { data } = await axios(`${API}/?page=${page}`);

    //   setCount(Math.ceil(data.count / 6));

    dispatch({
      type: "GET_PRODUCTS",
      // type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
    // console.log(data);
  };

  const getProductsDetails = async (id) => {
    let { data } = await axios(`${URL}/products/${id}`);
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
    let { data } = await axios(`${URL}/profile_client/${email}`);
    dispatch({
      type: "GET_USER_DATA",
      payload: data,
    });
  };

  const addProduct = async (newProduct) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    // if (access) {
    //   config.headers.Authorization = `Bearer ${access}`;
    // }
    await axios.post(`${URL}/products/`, newProduct, config);
    getProducts();
  };

  const deleteProduct = async (id) => {
    // let access = localStorage.getItem("access");
    // let config = {};
    // if (access) {
    //   config = {
    //     headers: { Authorization: `Bearer ${access}` },
    //   };
    // }
    await axios.delete(`${URL}/products/${id}/`);
    getProducts();
  };

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

  return (
    <productContext.Provider
      value={{
        products: state.products,
        productDetails: state.productDetails,
        productToEdit: state.productToEdit,
        user: state.user,
        page,
        count,
        setPage,
        addProduct,
        getProducts,
        getProductsDetails,
        addProduct,
        deleteProduct,
        editProduct,
        saveProduct,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
