import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  // import.meta.env.BASE_URL is not working
  baseURL: "http://localhost:4000",
});

export default instance;
