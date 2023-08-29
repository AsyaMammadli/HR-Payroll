import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BaseApi as axios } from "../api/axios";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(() => {
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token");
      return token;
    }
    return null;
  });

  const login = async (payload) => {
    const apiResponse = await axios.post("login", payload);
    const token = apiResponse.data.accessToken;
    localStorage.setItem("token", token);
    setToken(token);
    navigate("/");
  };

  const logout = async () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;

export const useAuth = () => {
  return useContext(AuthContext);
};
