import "./App.css";
import NavbarTop from "./NavbarTop";
import { FaCashRegister } from "react-icons/fa";
import { SiApplemusic, SiStylelint } from "react-icons/si";
import { MdFoodBank } from "react-icons/md";
import axios from "axios";
import { GoVerified, GoUnverified } from "react-icons/go";
import {
  Anchor,
  Divider,
  Grid,
  Paper,
  Switch,
  Text,
  Title,
} from "@mantine/core";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Button } from "@mantine/core";
import StatsbarContainer from "./StatsbarContainer";

import LineChart from "./LineChart";
import PieChartDash from "./PieChartDash";
import { useState } from "react";
import { Calendar } from "@mantine/dates";

import ActionMenuDash from "./ActionMenuDash";
import AppShellDash from "./AppShellDash";
import VendorServiceCategories from "./VendorServiceCategories";
import Dashbaordmain from "./Dashbaordmain";
import LineChartDash from "./LineChartDash";
import DjandMusic from "./DjandMusic";

axios.interceptors.request.use((request) => {
  request.headers.common.token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODA5MDFkYWZmNGEyZWYyZmVlYTlkZSIsImVtYWlsIjoibXVoYW1tYWR0YWxoYTUxN0BnbWFpbC5jb20iLCJ1c2VyVHlwZSI6InZlbmRvciIsImlhdCI6MTY1MzI0NzIyNSwiZXhwIjo0MjQ1MjQ3MjI1fQ.RfZohhQFnB5U0DZ5itkcMwdL6Q027D5Xhor9NIitWRk`;

  return request;
});
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppShellDash />}>
          <Route path="/" element={<Dashbaordmain />} />
          <Route
            path="registerToServiceCateogry"
            element={<VendorServiceCategories />}
          >
            <Route path="dj&music" element={<DjandMusic />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
