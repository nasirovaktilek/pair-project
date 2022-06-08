import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { productContext } from "../../Context/ProductContext";
import EditIcon from '@mui/icons-material/Edit';
import './Details.css'

const ProductDetails = () => {
  let { id } = useParams();

  const { getProductsDetails, productDetails } = useContext(productContext);
  console.log("effect in details");

  useEffect(() => {
    getProductsDetails(id);
  }, []);

  return (
    <div className="main-div">
      <div>
        <img id="imageCart" src={productDetails.image} alt={productDetails.name}/>
      </div>
      <div>
      <Button
              variant="contained"
              color="success"
              startIcon={<AddShoppingCartIcon />}
              fullWidth={true}
              sx={{ mt: "20px", height: "50px" }}
            >
              Добавить в корзину
            </Button>
            <NavLink to={`/edit/${productDetails.id}`}>
               <Button
               variant="contained"
               color="error"
               startIcon={<EditIcon />}
               fullWidth={true}
               sx={{ mt: "20px", height: "40px", width: "80px" }}
               >Edit</Button>
             </NavLink>

      </div>
    </div>
    // <section className="product__block-details">
    //   <Container>
    //     <img width={500} src={productDetails.image} alt={productDetails.name} />
    //     <Grid container spacing={2}>
    //       <Grid item xs={6}></Grid>
    //       <Grid item xs={6} sx={{ mt: 5 }}>
    //         <Typography
    //           variant="h3"
    //           gutterBottom
    //           component="h3"
    //           sx={{ fontWeight: 700, letterSpacing: 2 }}
    //         >
    //           {productDetails.name}
    //         </Typography>
    //         <Typography variant="body2" gutterBottom>
    //           {productDetails.description}
    //         </Typography>
    //         <Alert
    //           icon={<TrendingDownIcon fontSize="inherit" />}
    //           severity="success"
    //           sx={{ fontWeight: 700, mt: "20px" }}
    //         >
    //           Скидка : 10 %
    //         </Alert>
    //         <Box
    //           component="div"
    //           sx={{
    //             p: 2,
    //             border: "1px dashed grey",
    //             display: "flex",
    //             alignItems: "center",
    //             mt: "20px",
    //           }}
    //         >
    //           <Typography
    //             variant="h5"
    //             component="div"
    //             sx={{
    //               fontWeight: 300,
    //               letterSpacing: 2,
    //               textDecoration: "line-through",
    //               marginRight: "20px",
    //             }}
    //           >
    //             {productDetails.price} с.
    //           </Typography>
    //           <Typography
    //             variant="h4"
    //             component="div"
    //             sx={{ fontWeight: 700, letterSpacing: 2 }}
    //           >
    //             {productDetails.price} с.
    //           </Typography>
    //         </Box>
    //         <Button
    //           variant="contained"
    //           color="success"
    //           startIcon={<AddShoppingCartIcon />}
    //           fullWidth={true}
    //           sx={{ mt: "20px", height: "50px" }}
    //         >
    //           Добавить в корзину
    //         </Button>
    //         <NavLink to={`/edit/${productDetails.id}`}>
    //           <Button>Edit</Button>
    //         </NavLink>
    //         <Alert
    //           severity="info"
    //           variant="outlined"
    //           sx={{ fontWeight: 700, mt: "20px" }}
    //         >
    //           Телефон: 54545454
    //         </Alert>
    //       </Grid>
    //     </Grid>
    //   </Container>
    // </section>
  );
};

export default ProductDetails;
