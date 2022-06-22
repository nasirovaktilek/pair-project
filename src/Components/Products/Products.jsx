import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActions, Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
// import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Products.css";
// import ReactPaginate from "react-paginate";
import { productContext } from "../../Context/ProductContext";
import Filter from "../Filter/Filter";
import { cartContext } from "../../Context/CartContext";
import usePagination from "./Pagination";

const Products = () => {
  const { getProducts, products, deleteProduct } = useContext(productContext);

  const { addProductToCart } = useContext(cartContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [type, setType] = useState(searchParams.get("type") || "all");

  const paramsWithType = () => {
    return {
      type: type,
      q: searchParams.get("q"),
    };
  };

  const paramsNoType = () => {
    return {
      q: searchParams.get("q") || "",
    };
  };

  useEffect(() => {
    getProducts();
  }, []);

  // useEffect(() => {
  //   getProducts();
  // }, [page, searchParams]);

  // const handleChange = (e, p) => {
  //   setPage(p);
  // };

  useEffect(() => {
    if (searchParams.get("type")) {
      setSearchParams(paramsWithType());
    } else {
      setSearchParams(paramsNoType());
    }
  }, []);

  useEffect(() => {
    getProducts();
    if (type === "all") {
      setSearchParams(paramsNoType());
    } else {
      setSearchParams(paramsWithType());
    }
  }, [type, searchParams]);

  //!!!!!!!!!!

  let [page, setPage] = useState(1);
  const PER_PAGE = 5;

  const count = Math.ceil(products.length / PER_PAGE);
  const _DATA = usePagination(products, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
    // console.log(p);
  };
  //!!!!!!!!!!

  // ! Paginate======================
  // const [pageNumber, setPageNumber] = useState(0);
  // const productsLimit = 6;
  // const productVisited = pageNumber * productsLimit;

  // const pageCount = Math.ceil(products.length / productsLimit);

  // let sliceTwoIndex = productVisited + productsLimit;
  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };

  return (
    <Box className="products">
      <div className="main_container">
        <Box className="filter" sx={{ width: "100%" }}>
          <Filter type={type} setType={setType} />
        </Box>
        <div className="container">
          {products
            ? products.slice().map(
                (
                  item //productVisited, sliceTwoIndex
                ) => (
                  <Card
                    key={item.id}
                    className="card"
                    sx={{
                      borderRadius: "20px",
                      width: "320px",
                      height: "530px",
                      marginBottom: "50px",
                      backgroundColor: "#1e1c1c6b",
                      margin: "30px 20px",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "15px",
                        textAlign: "center",
                      }}
                    >
                      <CardMedia
                        sx={{
                          width: "300px",
                          height: "300px",
                          alignItems: "center",
                          margin: " 10px auto",
                          borderRadius: "15px",
                        }}
                        component="img"
                        alt={item.name}
                        height="100"
                        image={item.image}
                      />
                      <CardContent>
                        <Typography
                          sx={{
                            color: "#FFFFFFB3",
                            fontFamily: "Josefin Sans",
                            fontSize: "20px",
                          }}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          {item.name}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#808080",
                            fontFamily: "Poppins",
                            fontSize: "16px",
                          }}
                          variant="body2"
                          color="text.secondary"
                          height="25px"
                        >
                          {item.description}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#808080",
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            fontWeight: "bold",
                            fontSize: "15px",
                            marginTop: "10px",
                          }}
                          variant="body2"
                          color="text.secondary"
                        >
                          {item.price} $
                        </Typography>
                      </CardContent>
                    </Box>
                    <CardActions
                      sx={{
                        justifyContent: "center",
                      }}
                    >
                      <Box sx={{ marginBottom: "5%" }}>
                        <Link to={`/details/${item.id}`}>
                          <Button
                            sx={{
                              color: "#808080",

                              borderColor: "#808080",
                            }}
                            className="btn"
                            size="small"
                            variant="outlined"
                          >
                            Preview
                          </Button>
                        </Link>

                        <Button onClick={(e) => addProductToCart(item)}>
                          <AddShoppingCartIcon sx={{ color: "#808080" }} />
                        </Button>
                      </Box>
                    </CardActions>
                  </Card>
                )
              )
            : null}
        </div>
      </div>

      {/* <Box display="flex" justifyContent="center" my={3}>
        <Pagination
          sx={{
            bgcolor: "red",
          }}
          // count={10}
          count={count}
          page={page}
          onChange={handleChange}
        />
      </Box> */}

      {/* <Box display="flex" justifyContent="center" my={3}>
        <Stack spacing={2}>
          <Pagination
            sx={{
              bgcolor: "white",
            }}
            count={count}
            page={page}
            onChange={() => handleChange()}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </Box> */}

      <Box>
        {" "}
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          sx={{
            bgcolor: "white",
          }}
        />
      </Box>

      {/* 
      <ReactPaginate
        previousLabel={"Назад"}
        nextLabel={"Вперед"}
        pageCount={pageCount}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        onPageChange={changePage}
      /> */}
    </Box>
  );
};

export default Products;
