import React, { useContext, useState } from "react";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authContext } from "../../Context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { register, error } = useContext(authContext);

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
          <button
            onClick={() => register(email, password, passwordConfirm)}
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
