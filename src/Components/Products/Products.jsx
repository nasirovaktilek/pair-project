import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActions, Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Products.css";
import { productContext } from "../../Context/ProductContext";
import Filter from "../Filter/Filter";
import { cartContext } from "../../Context/CartContext";
import usePagination from "./Pagination";

const Products = () => {
  const {
    getProducts,
    products,
    deleteProduct,
    productsLength,
    getProductsLength,
  } = useContext(productContext);

  const { addProductToCart } = useContext(cartContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [type, setType] = useState(searchParams.get("type") || "all");
  const [page, setPage] = useState(1);
  const PER_PAGE = 6;

  const paramsWithType = () => {
    return {
      type: type,
      _page: page,
      _limit: PER_PAGE,
      q: searchParams.get("q"),
    };
  };

  const paramsNoType = () => {
    return {
      _page: page,
      _limit: PER_PAGE,
      q: searchParams.get("q") || "",
    };
  };

  useEffect(() => {
    getProducts();
    getProductsLength();
  }, []);

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
  }, [type, searchParams, page]);

  // useEffect(() => {
  //   setSearchParams(paramsWithType() + `_page=${page}&_limit=${PER_PAGE}`);
  // }, [page, searchParams]);

  // ! Paginate======================

  const count = Math.ceil(productsLength / PER_PAGE);
  const _DATA = usePagination(products, PER_PAGE);
  console.log(products);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  //!========================

  return (
    <Box className="products">
      <div className="main_container">
        <Box className="filter" sx={{ width: "100%" }}>
          <Filter type={type} setType={setType} />
        </Box>
        <div className="container">
          {products && products.length
            ? products.map((item) => (
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
              ))
            : null}
        </div>
      </div>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.208)",
            width: "368px",
            color: "red",
            marginBottom: "50px",
          }}
        />
      </Box>
    </Box>
  );
};

export default Products;
