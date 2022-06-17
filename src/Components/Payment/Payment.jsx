import React from "react";
import { useState } from "react";
import "./Payment.css";
// import Cards from "react-credit-card";
import { Button, TextField } from "@mui/material";

const Payment = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${Image})`,
      }}
    >
      <form
        // onSubmit={(e) => handleSave(e)}
        style={{
          marginTop: "7%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "85vh",
          borderRadius: "7px",
          border: "2px solid white",
        }}
      >
        <TextField
          className="textField"
          id="outlined-basic"
          label="card number"
          variant="outlined"
          // value={inputValues.name}
          name="number"
          // onChange={(e) => handleChange(e)}
          InputProps={{ style: { backgroundColor: "#f1c895" } }}
        />

        <TextField
          className="textField"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          // value={inputValues.type}
          name="name"
          // onChange={(e) => handleChange(e)}
          InputProps={{ style: { backgroundColor: "#f1c895" } }}
        />

        <TextField
          className="textField"
          id="outlined-basic"
          label="MM/YY Expiry"
          variant="outlined"
          // value={inputValues.description}
          name="expiry"
          // onChange={(e) => handleChange(e)}
          InputProps={{ style: { backgroundColor: "#f1c895" } }}
        />

        <TextField
          className="textField"
          id="outlined-basic"
          label="CVC"
          variant="outlined"
          // value={inputValues.price}
          name="cvc"
          // onChange={(e) => handleChange(e)}
          InputProps={{ style: { backgroundColor: "#f1c895" } }}
        />

        <Button
          className="btnSaveCard"
          type="submit"
          variant="contained"
          color="success"
          // startIcon={<SaveIcon />}
          fullWidth={true}
          sx={{
            height: "45px",
            width: "120px",
          }}
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default Payment;

// const Payment = () => {
//   const [number, setNumber] = useState("");
//   const [name, setName] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvc, setCvc] = useState("");
//   const [focus, setFocus] = useState("");

//   return (
//     <div style={{ marginTop: "100px" }} className="pay">
//       <Cards
//         number={number}
//         name={name}
//         xpiry={expiry}
//         cvc={cvc}
//         focused={focus}
//       />
//       <form>
//         <input
//           type="tel"
//           name="number"
//           placeholder="Card Number"
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//           onFocus={(e) => setFocus(e.target.name)}
//         />
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           onFocus={(e) => setFocus(e.target.name)}
//         />
//         <input
//           type="text"
//           name="expiry"
//           placeholder="MM/YY Expiry"
//           value={expiry}
//           onChange={(e) => setExpiry(e.target.value)}
//           onFocus={(e) => setFocus(e.target.name)}
//         />
//         <input
//           type="tel"
//           name="cvc"
//           placeholder="CVC"
//           value={cvc}
//           onChange={(e) => setExpiry(e.target.value)}
//           onFocus={(e) => setFocus(e.target.name)}
//         />
//       </form>
//       HELLO
//     </div>
//   );
// };

// export default Payment;
