import axios from "axios";
import React, { createContext, useReducer, useState } from "react";
import { useLocation } from "react-router-dom";
// import API from "../Config";

export const productContext = createContext();
let API = "http://localhost:8000/products";

const INIT_STATE = {
  products: [],
  productsLength: 0,
  productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCTS_LENGTH":
      return { ...state, productsLength: action.payload };
    case "GET_PRODUCTS_DETAILS":
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  const location = useLocation();
  // console.log(location.search);

  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
  };

  const getProducts = async () => {
    const { data } = await axios(`${API}${location.search}`);
    // const { data } = await axios(`${API}/?page=${page}`);

    // setCount(Math.ceil(data.count / 6));

    dispatch({
      type: "GET_PRODUCTS",

      payload: data,
    });
  };

  const getProductsLength = async () => {
    const { data } = await axios(`${API}`);
    dispatch({
      type: "GET_PRODUCTS_LENGTH",
      payload: data.length,
    });
  };

  const getProductsDetails = async (id) => {
    const { data } = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_PRODUCTS_DETAILS",
      payload: data,
    });
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  const editProduct = async (id, prodObj) => {
    await axios.patch(`${API}/${id}`, prodObj);
    getProducts();
  };

  return (
    <productContext.Provider
      value={{
        products: state.products,
        productDetails: state.productDetails,
        productsLength: state.productsLength,
        page,
        count,
        setPage,
        setCount,
        addProduct,
        getProducts,
        getProductsDetails,
        deleteProduct,
        editProduct,
        getProductsLength,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
