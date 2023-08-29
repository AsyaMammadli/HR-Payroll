import axios from "axios";

// eslint-disable-next-line no-undef
const BASE_API_URL = "http://localhost:3000";

// for login and register
const BaseApi = axios.create({
  baseURL: BASE_API_URL,
});

// for protected routes
const BaseApiPrivate = axios.create({
  baseURL: BASE_API_URL,
  headers: { "Content-Type": "application/json" },
});

BaseApiPrivate.interceptors.request.use((config) => {
  let authData = localStorage.getItem("token");
  config.headers["Authorization"] = `Bearer ${authData.accessToken}`;
  return config;
});

BaseApiPrivate.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // if (error.response.status === 403) {
    //   window.location = "/forbidden";
    // }
    if (error.response.status === 401) {
      window.location = "/login";
    }
  }
);

export { BaseApi, BaseApiPrivate };
export default BaseApiPrivate;
