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
  const { user } = useContext(authContext);
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
      <Container sx={{ margin: "20px auto" }}>
        <Grid container spacing={2} sx={{ display: "flex" }}>
          <img
            src={productDetails.image}
            alt={productDetails.name}
            style={{
              borderRadius: "13px",
              width: "50%",
            }}
          />
          <Grid item xs={6} sx={{ alignItems: "center" }}>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              sx={{
                fontWeight: 700,
                letterSpacing: 2,
                fontSize: "30px",
                color: "#808080",
                textAlign: "center",
              }}
            >
              {productDetails.name}
            </Typography>
            {/* <Typography variant="body2" gutterBottom>
              {productDetails.description}
            </Typography> */}
            <Typography
              variant="h4"
              component="div"
              sx={{
                color: "#808080",
                fontWeight: 700,
                letterSpacing: 2,
                textAlign: "center",
              }}
            >
              {productDetails.price} $
            </Typography>

            <Box
              component="div"
              sx={{
                p: 2,

                display: "flex",
                alignItems: "center",
                mt: "20px",
              }}
            ></Box>
            <Button
              startIcon={<AddShoppingCartIcon />}
              fullWidth={true}
              sx={{
                mt: "20px",
                color: "white",
                height: "50px",
                backgroundColor: "rgb(197, 151, 77)",
                borderColor: "white",
              }}
              className="btn"
              size="medium"
              variant="outlined"
            >
              Add To Cart
            </Button>
            {/* {user === "admin@admin.com" ? (  */}
            <NavLink to={`/edit/${productDetails.id}`}>
              <Button
                startIcon={<EditIcon />}
                fullWidth={true}
                variant="outlined"
                sx={{
                  color: "#808080",
                  marginTop: "20px",
                  height: "50px",

                  width: "49%",
                  borderColor: "#808080",
                }}
              >
                Edit
              </Button>
              <Button
                onClick={() => deleteProduct(productDetails.id)}
                startIcon={<DeleteForeverIcon />}
                fullWidth={true}
                variant="outlined"
                sx={{
                  color: "#808080",
                  marginTop: "20px",
                  height: "50px",
                  width: "49%",

                  borderColor: "#808080",
                  marginLeft: "10px",
                }}
              >
                Delete
              </Button>
            </NavLink>
           {/* ) : null }  */}

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
