import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();

let API = "http://unitedstates3.herokuapp.com/api/v1";

export const useAuth = () => {
  return useContext(authContext);
};

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const register = async (email, password, passwordConfirm) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    console.log(email, password, passwordConfirm, "from context");
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirm", passwordConfirm);

    try {
      const res = await axios.post(
        `${API}/account/register/`,
        formData,
        config
      );
      navigate("/login");
    } catch (e) {
      console.log(e);
      setError("error occured");
    }
  };

  async function login(username, password) {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    let formData = new FormData();
    formData.append("email", username);
    formData.append("password", password);
    try {
      let res = await axios.post(`${API}/account/login/`, formData, config);
      // console.log(res.data);
      const { access, refresh } = res.data;
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);
      localStorage.setItem("username", username);
      setUser(username);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  }

  // async function checkAuth() {
  //   let token = JSON.parse(localStorage.getItem("token"));
  //   try {
  //     const Authorization = `Bearer ${token.access}`;

  //     let res = await axios.post(
  //       `${API}api/token/refresh/`,
  //       {
  //         refresh: token.refresh,
  //       },
  //       {
  //         headers: { Authorization },
  //       }
  //     );

  //     localStorage.setItem(
  //       "token",
  //       JSON.stringify({
  //         refresh: token.refresh,
  //         access: res.data.access,
  //       })
  //     );
  // ===============

  async function checkAuth() {
    const refreshToken = JSON.parse(localStorage.getItem("refresh"));
    const accessToken = JSON.parse(localStorage.getItem("access"));
    console.log(accessToken);

    try {
      const Authorization = `Bearer ${accessToken}`;

      let res = await axios.post(
        `${API}/account/token/refresh/`,
        {
          refresh: refreshToken,
        },
        {
          headers: { Authorization },
        }
      );
      const newAccess = res.data.access;
      localStorage.setItem("access", newAccess);
      // ============
      let userName = localStorage.getItem("username");
      setUser(userName);
    } catch (error) {
      logout();
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser("");
  }

  return (
    <authContext.Provider
      value={{
        register,
        login,
        user,
        error,
        checkAuth,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
