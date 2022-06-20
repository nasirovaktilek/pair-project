import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { productContext } from "../../Context/ProductContext";
import { Alert, Box, Container, Grid, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { authContext } from "../../Context/AuthContext";
// import bgImage from "../../../assets/images/bg_home_page.jpg";

const ProductDetails = () => {
  let { id } = useParams();
  const { deleteProduct } = useContext(productContext);
  const { user } = React.useContext(authContext);
  const { getProductsDetails, productDetails } = useContext(productContext);

  useEffect(() => {
    getProductsDetails(id);
  }, []);

  return (
    <Grid
      className="product__block-details"
      style={{
        paddingTop: "10%",
        paddingBottom: "10%",
        // backgroundColor: "#C49B63",
        backgroundColor: "#1e1c1c",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <img
            width={550}
            src={productDetails.image}
            alt={productDetails.name}
            style={{ borderRadius: "13px" }}
          />
          <Grid item xs={6} sx={{ margin: "20px 10px", alignItems: "center" }}>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              sx={{
                fontWeight: 700,
                letterSpacing: 2,
                fontSize: "30px",
              }}
            >
              {productDetails.name}
            </Typography>
            {/* <Typography variant="body2" gutterBottom>
              {productDetails.description}
            </Typography> */}

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
                  // letterSpacing: 2,
                  // textDecoration: "line-through",
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
              // color="success"
              startIcon={<AddShoppingCartIcon />}
              fullWidth={true}
              sx={{
                color: "#808080",
                marginTop: "20px",
                height: "50px",
                // borderColor: "#808080",
              }}
              className="btn"
              size="medium"
              variant="outlined"
            >
              Add To Cart
            </Button>
            {/* {user.email === "admin@gmail.com" ? (  */}
            <NavLink to={`/edit/${productDetails.id}`}>
              <Button
                variant="contained"
                // color="warning"
                startIcon={<EditIcon />}
                fullWidth={true}
                sx={{
                  mt: "20px",
                  height: "50px",
                  width: "180px",
                  backgroundColor: "rgb(197, 151, 77)",
                  borderColor: "red",
                }}
              >
                Edit
              </Button>
              <Button
                onClick={() => deleteProduct(productDetails.id)}
                variant="contained"
                // color="error"
                startIcon={<DeleteForeverIcon />}
                fullWidth={true}
                sx={{
                  mt: "20px",
                  height: "50px",
                  width: "180px",
                  marginLeft: "10px",
                  backgroundColor: "rgb(197, 151, 77)",
                }}
              >
                Delete
              </Button>
            </NavLink>
            {/* ) : null } */}

            <Alert
              severity="info"
              variant="outlined"
              sx={{ fontWeight: 700, mt: "20px" }}
            >
              Номер кофейни должен быть здесь
            </Alert>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default ProductDetails;
