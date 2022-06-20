import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActions } from "@mui/material";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Products.css";
import ReactPaginate from "react-paginate";
import { productContext } from "../../Context/ProductContext";
import Filter from "../Filter/Filter";
import { cartContext } from "../../Context/CartContext";

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

  // ! Paginate======================
  const [pageNumber, setPageNumber] = useState(0);
  const productsLimit = 6;
  const productVisited = pageNumber * productsLimit;

  const pageCount = Math.ceil(products.length / productsLimit);

  let sliceTwoIndex = productVisited + productsLimit;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Box className="products">
      {/* <Box
        sx={{
          // margin: "70px 600px",
          fontSize: "50px",
          fontFamily: "Great Vibes",
          color: "#c49b63",
        }}
      >
        <h2>MENU</h2>
      </Box> */}
      <div className="main_container">
        <Box className="filter" sx={{ width: "100%" }}>
          <Filter type={type} setType={setType} />
        </Box>
        <div className="container">
          {products
            ? products.slice(productVisited, sliceTwoIndex).map((item) => (
                <Card
                  key={item.id}
                  className="card"
                  sx={{
                    borderRadius: "20px",
                    // width: "320px",
                    height: "530px ",
                    marginBottom: "50px",
                    backgroundColor: "#1e1c1c6b",
                    margin: "30px 30px",
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
                      // paddingBottom: "10px",
                    }}
                  >
                    {/* <Button
                      sx={{
                        marginRight: "20px",
                      }}
                      onClick={() => deleteProduct(item.id)}
                      className="btn"
                      size="small"
                      variant="outlined"
                    >
                      Delete <RestoreFromTrashIcon />
                    </Button> */}

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
      />
    </Box>
  );
};

export default Products;
