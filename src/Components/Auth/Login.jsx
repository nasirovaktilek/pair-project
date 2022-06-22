import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API_AUTH from "../../Config";
import { authContext } from "../../Context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(authContext);

  // const navigate = useNavigate();

  // const notify = (error) => {
  //   toast.error(Object.values(error).toString().replace(/,/gi, ""), {
  //     icon: false,
  //     theme: "dark",
  //   });
  // };

  // const registerUser = async (newUser) => {
  //   const config = {
  //     headers: { "Content-Type": "multipart/form-data" },
  //   };
  //   try {
  //     const res = await axios.post(`${API_AUTH}login/`, newUser, config);
  //     const { access, refresh } = res.data;
  //     localStorage.setItem("access", access);
  //     localStorage.setItem("refresh", refresh);
  //     navigate("/check-token");
  //   } catch (error) {
  //     notify(error.response.data);
  //   }
  // };

  // function handleClick() {
  //   const form_data = new FormData();
  //   if (!email) notify("Enter email");
  //   else if (!password) notify("Enter password");
  //   else {
  //     form_data.append("email", email);
  //     form_data.append("password", password);
  //     registerUser(form_data);
  //   }
  // }

  function handleLogin(email, password) {
    login(email, password);
  }

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
          <h2>Login</h2>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
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
              name="password"
              key="password"
              placeholder="*Password"
            />
          </div>
          <button
            onClick={() => handleLogin(email, password)}
            className="btn btn-light"
            style={{ width: "100%" }}
          >
            Login
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
