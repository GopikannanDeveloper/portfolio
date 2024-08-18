import axios from "axios";
const baseURL = `http://localhost:8080/api/`
const api = axios.create({
  baseURL: baseURL,
});

api.interceptors.request.use(
  function (config) {
    // const token = getToken();
    // if (token) {
    //   config.headers["Authorization"] = `Bearer ${token}`;
    // }
    return config;
  },
  function (error) {
    console.log("service", error);
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    console.error("An error occurred", error);
    // Example: Redirect on unauthorized
    if (
      error.response &&
      error.response.status === 401 &&
      window.location.pathname !== "/"
    ) {
    //   logout();
    }

    return Promise.reject(error);
  }
);

export default api;

export const getProfile = "profile";
export const getExperience = "experience";
export const getEducation = "education";
export const getMyTech = "myTech";
export const getMyProjects = "projects";