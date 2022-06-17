import { Box, Button, CardMedia } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { cartContext } from "../../Context/CartContext";
// import { calcTotalPrice } from "../../helpers/cartFunctions";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, getCart, deleteCartProduct, changeProductCount } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);
  console.log(cart.totalPrice);

  const navigate = useNavigate();

  const navigateToPay = () => {
    navigate("/payment");
  };

  return (
    <Box
      sx={{
        padding: "100px",
        backgroundColor: "#1e1c1c",
        color: "white",
      }}
    >
      <Box
        sx={{
          margin: "70px auto",
          textAlign: "center",
          fontSize: "50px",
          fontFamily: "Great Vibes",
          color: "#c49b63",
        }}
      >
        CART
      </Box>
      <table>
        <thead>
          <tr
            style={{
              fontSize: "17px",
              marginBottom: "50px",
              textAlign: "center",
              fontFamily: "Josefin Sans",
              backgroundColor: "#c49b63",
              height: "50px",
              border: "3px solid #c49b63",
              borderRadius: "20px",
            }}
          >
            <th sx={{ marginBottom: "100px" }}>IMAGE</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>AMOUNT</th>
            <th>PRODUCT AMOUNT</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.products
            ? cart.products.map((elem) => (
                <tr key={elem.item.id}>
                  <td>
                    <CardMedia
                      sx={{
                        width: "200px",
                        height: "200px",
                        margin: "100px 30px",
                        borderRadius: "10px",
                      }}
                      component="img"
                      image={elem.item.image}
                      alt={elem.item.name}
                      height="100"
                    />
                  </td>
                  <td
                    style={{
                      width: "350px",
                      paddingLeft: "30px",
                      fontSize: "18px",
                    }}
                  >
                    {elem.item.name}
                  </td>
                  <td
                    style={{
                      width: "200px",
                      // margin: "20px 20px",
                      textAlign: "center",
                    }}
                  >
                    {elem.item.price} $
                  </td>

                  <td>
                    <input
                      style={{ width: "70%" }}
                      type="number"
                      value={elem.count}
                      onChange={(e) =>
                        changeProductCount(elem.item.id, e.target.value)
                      }
                    />
                  </td>
                  <td
                    style={{
                      width: "200px",
                      // margin: "20px 20px",
                      paddingLeft: "80px",
                    }}
                  >
                    {elem.subPrice} $
                  </td>
                  <td>
                    <Button onClick={() => deleteCartProduct(elem.item.id)}>
                      DELETE
                    </Button>
                  </td>
                </tr>
              ))
            : null}
          {/* <hr style={{ borderBottom: "2px solid maroon" }} /> */}
        </tbody>
      </table>

      <Box
        sx={{
          textAlign: "end",
          marginRight: "150px",
          fontFamily: "Josefin Sans",
        }}
      >
        <h4>TOTAL PRICE: {cart.totalPrice} $</h4>

        <Button sx={{ textAlign: "end" }} onClick={() => navigateToPay()}>
          ORDER NOW
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
