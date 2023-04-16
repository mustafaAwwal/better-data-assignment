import axios from "axios";

export const storeAxios = axios.create({ baseURL: "https://fakestoreapi.com" });
