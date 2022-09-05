import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status > 400 &&
    error.response.status <= 500;

  if (!expectedErrors) {
    alert("An unexpected error occured.");
    console.log(error);
  }

  return Promise.reject(error);
});

const httpMethods = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default httpMethods;
