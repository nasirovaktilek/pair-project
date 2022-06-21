import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API from "../../Config";
import { authContext } from "../../Context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [name, setName] = useState("");
  const { register, error } = useContext(authContext);

  // const navigate = useNavigate();
  // const notify = (error) => {
  //   toast.error(Object.values(error).toString().replace(/,/gi, ""), {
  //     icon: false,
  //     theme: "dark",
  //   });
  // };

  // const loginUser = async (newUser) => {
  //   const config = {
  //     headers: { "Content-Type": "multipart/form-data" },
  //   };
  //   try {
  //     const res = await axios.post(`${API}/account/login/`, newUser, config);
  //     console.log(res);
  //     const { access, refresh } = res.data;
  //     localStorage.setItem("access", access);
  //     localStorage.setItem("refresh", refresh);
  //     navigate("/products");
  //   } catch (error) {
  //     notify(error.response.data);
  //   }
  // };

  // const registerUser = async (newUser) => {
  //   const config = {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //       // "Access-Control-Allow-Origin": "http://localhost:3000",
  //     },
  //   };
  //   try {
  //     await axios.post(`${API_AUTH}register/`, newUser, config);
  //     // loginUser(newUser);
  //   } catch (error) {
  //     notify(error.response.data);
  //   }
  // };

  // function handleClick() {
  //   const form_data = new FormData();
  //   if (!inpEmail) notify("Enter email");
  //   else if (!inpPassword) notify("Enter password");
  //   else if (!inpPasswordConfirm) notify("Enter password");
  //   else if (!inpName) notify("Enter name");
  //   else if (!inpLastName) notify("Enter last name");
  //   else {
  //     form_data.append("email", inpEmail);
  //     form_data.append("password", inpPassword);
  //     form_data.append("password_confirm", inpPasswordConfirm);
  //     form_data.append("name", inpName);
  //     form_data.append("last_name", inpLastName);
  //     registerUser(form_data);
  //   }
  // }

  // function handleRegister(email, password, passwordConfirm, name) {
  //   register(email, password, passwordConfirm, name);
  // }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="card" style={{ width: "50vw" }}>
        <div className="card-body">
          <h2>Create new account</h2>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              key="email"
              placeholder="*Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="password"
              key="password"
              placeholder="*Password"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              value={passwordConfirm}
              name="password_confirm"
              key="password_confirm"
              placeholder="*Password Confirmation"
            />
          </div>
          <div className="mb-3">
            <input
              type="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
              name="name"
              key="name"
              placeholder="*Name"
            />
          </div>
          {/* <div className="mb-3">
            <input
              type="last_name"
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
              name="last_name"
              key="last_name"
              placeholder="*Last Name"
            />
          </div> */}

          <button
            onClick={() => register(email, password, passwordConfirm, name)}
            className="btn btn-light"
            style={{ width: "100%" }}
          >
            Register
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;
