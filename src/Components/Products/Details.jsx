import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { productContext } from "../../Context/ProductContext";
import { Alert, Box, Container, Grid, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ProductDetails = () => {
  let { id } = useParams();
  const { deleteProduct } = useContext(productContext);

  const { getProductsDetails, productDetails } = useContext(productContext);
  console.log("effect in details");

  useEffect(() => {
    getProductsDetails(id);
  }, []);

  return (
    <Grid className="product__block-details" sx={{paddingTop:'10%'}}>
      <Container >
        <Grid container spacing={2}>
        <img width={500} 
        src={productDetails.image} 
        alt={productDetails.name}
        style={{borderRadius:'13px'}}
        />
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
              <Button
               variant="contained"
               color="info"
               startIcon={<EditIcon />}
               fullWidth={true}
               sx={{ mt: "20px", height: "50px", width:'180px' }}
               >Edit</Button>
              <Button onClick={() => deleteProduct(productDetails.id) }
              variant="contained"
              color="error"
              startIcon={<DeleteForeverIcon />}
              fullWidth={true}
              sx={{ mt: "20px", height: "50px", width:'180px' }}
              >
                Delete
              </Button>
            </NavLink>
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
