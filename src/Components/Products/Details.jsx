import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

import { productContext } from "../../Context/ProductContext";

const ProductDetails = () => {
  let { id } = useParams();
  const { deleteProduct } = useContext(productContext);

  const { getProductsDetails, productDetails } = useContext(productContext);
  console.log("effect in details");

  useEffect(() => {
    getProductsDetails(id);
  }, []);

  return (
    <section className="product__block-details">
      <Container>
        <img width={500} src={productDetails.image} alt={productDetails.name} />
        <Grid container spacing={2}>
          <Grid item xs={6}></Grid>
          <Grid item xs={6} sx={{ mt: 5 }}>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              sx={{ fontWeight: 700, letterSpacing: 2 }}
            >
              {productDetails.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {productDetails.description}
            </Typography>
            <Alert
              icon={<TrendingDownIcon fontSize="inherit" />}
              severity="success"
              sx={{ fontWeight: 700, mt: "20px" }}
            >
              Discount : 10 %
            </Alert>
            <Box
              component="div"
              sx={{
                p: 2,
                border: "1px dashed grey",
                display: "flex",
                alignItems: "center",
                mt: "20px",
              }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 300,
                  letterSpacing: 2,
                  textDecoration: "line-through",
                  marginRight: "20px",
                }}
              >
                {productDetails.price} с.
              </Typography>
              <Typography
                variant="h4"
                component="div"
                sx={{ fontWeight: 700, letterSpacing: 2 }}
              >
                {productDetails.price} $
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="success"
              startIcon={<AddShoppingCartIcon />}
              fullWidth={true}
              sx={{ mt: "20px", height: "50px" }}
            >
              Add To Cart
            </Button>
            <NavLink to={`/edit/${productDetails.id}`}>
              <Button>Edit</Button>
              <Button onClick={() => deleteProduct(productDetails.id)}>
                Delete
              </Button>
            </NavLink>
            <Alert
              severity="info"
              variant="outlined"
              sx={{ fontWeight: 700, mt: "20px" }}
            >
              Phone: 54545454
            </Alert>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ProductDetails;
