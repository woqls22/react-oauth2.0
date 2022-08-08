import axios from "axios";
import { OAUTH_SERVER } from "./Constants";

export const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "request-id": getCookie("request-id"),
};

export const SpringAxios = axios.create({
  baseURL: `${OAUTH_SERVER}`,
});
SpringAxios.interceptors.request.use(function (config) {
  return { ...config, headers: headers };
});

// 쿠키 가져오기 함수
function getCookie(cName: string) {
  cName = cName + "=";
  var cookieData = document.cookie;
  var start = cookieData.indexOf(cName);
  var cValue = "";
  if (start != -1) {
    start += cName.length;
    var end = cookieData.indexOf(";", start);
    if (end == -1) end = cookieData.length;
    cValue = cookieData.substring(start, end);
  }
  return unescape(cValue);
}
