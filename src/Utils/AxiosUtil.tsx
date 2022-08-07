import axios from "axios";
import { OAUTH_SERVER } from "./Constants";

export const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

export const SpringAxios = axios.create({
  baseURL: `${OAUTH_SERVER}`,
});
SpringAxios.interceptors.request.use(function (config) {
  return { ...config, headers: headers };
});
