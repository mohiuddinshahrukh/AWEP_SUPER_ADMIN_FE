import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import axios from "axios";
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODA5MDFkYWZmNGEyZWYyZmVlYTlkZSIsImVtYWlsIjoibXVoYW1tYWR0YWxoYTUxN0BnbWFpbC5jb20iLCJ1c2VyVHlwZSI6InZlbmRvciIsImlhdCI6MTY1MzI0NzIyNSwiZXhwIjo0MjQ1MjQ3MjI1fQ.RfZohhQFnB5U0DZ5itkcMwdL6Q027D5Xhor9NIitWRk`;
axios.interceptors.request.use((request) => {
  request.headers.common.token = token;
  return request;
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
