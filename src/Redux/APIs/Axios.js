import axios from "axios";

const Axios = axios.create({
  baseURL: "https://backend-movie-9oro.onrender.com/api",
});
export default Axios;
