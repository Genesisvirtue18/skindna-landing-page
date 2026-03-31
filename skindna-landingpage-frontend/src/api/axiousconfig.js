import axios from "axios";

// Base URL for your Spring Boot backend
const API = axios.create({
  baseURL: "https://apiskindna.skindna.co.in/api/", // change if deployed
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
