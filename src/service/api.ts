import axios from "axios";

export const api = axios.create({
  baseURL: "https://hamburgueria-kenzie-v2.herokuapp.com",
  timeout: 12000,
  headers: {
    "Content-Type": "application/json",
  },
});
