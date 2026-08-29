import axios from "axios";

const selfPublicClient = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: false,
});

export { selfPublicClient };
