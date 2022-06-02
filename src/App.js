import "./App.css";

import axios from "axios";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppShellDash from "./AppShellDash";
import VendorServiceCategories from "./VendorServiceCategories";
import Dashbaordmain from "./Dashbaordmain";

import DjandMusic from "./DjandMusic";
import BookingsPage from "./BookingsPage";
import { AllBookingsTableData } from "./AllBookingsTableData";
import AllBookingsTable from "./AllBookingsTable";
import CompletedBookingsTable from "./CompletedBookingsTable";
import PendingBookingsTable from "./PendingBookingsTable";
import TodaysBookingsTable from "./TodaysBookingsTable";
import Chats from "./Chats";
import BgImage from "./BgImage";
import AlonsoMoselyChat from "./AlonsoMoselyChat";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
//Helo World
function App() {
  return (
    <MantineProvider>
      <NotificationsProvider>
        <ModalsProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/vendor" element={<AppShellDash />}>
                <Route path="/vendor" element={<Dashbaordmain />} />
                <Route
                  path="registerToServiceCateogry"
                  element={<VendorServiceCategories />}
                >
                  <Route path="" element={<BgImage />} />
                  <Route path="dj&music" element={<DjandMusic />} />
                </Route>
                <Route path="bookings" element={<BookingsPage />}>
                  <Route
                    path="allBookingsTable"
                    element={<AllBookingsTable />}
                  />
                  <Route
                    path="completedBookingsTable"
                    element={<CompletedBookingsTable />}
                  />
                  <Route
                    path="pendingBookingsTable"
                    element={<PendingBookingsTable />}
                  />
                  <Route
                    path="todaysBookingsTable"
                    element={<TodaysBookingsTable />}
                  />
                </Route>
                <Route path="chat" element={<Chats />}>
                  <Route path="alonsoMosely" element={<AlonsoMoselyChat />} />
                </Route>
              </Route>
            </Routes>
          </Router>
        </ModalsProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
}
export default App;
// <Route path="/" element={<Dashbaordmain />} />
// <Route
//   path="registerToServiceCateogry"
//   element={<VendorServiceCategories />}
// >
//   <Route path="dj&music" element={<DjandMusic />} />
// </Route>
