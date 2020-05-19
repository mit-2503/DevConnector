import axios from "axios";

const setAuthToken = (token) => {
  //check if token is there in local store, if so add it to header otherwise delete
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
