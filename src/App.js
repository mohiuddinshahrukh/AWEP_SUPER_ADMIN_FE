import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/userProfiling/Login";
import SignUp from "./Components/userProfiling/Signup";

import AppShellDash from "./Components/userNavigation/AppShellDash";
import Dashbaordmain from "./Components/userDashboard/Dashbaordmain";

import VendorServiceCategories from "./Components/userServiceCategories/VendorServiceCategories";
import DjandMusic from "./Components/userServiceCategories/DjandMusic";
import BgImage from "./Components/userServiceCategories/BgImage";

import BookingsPage from "./Components/userBookings/BookingsPage";
import AllBookingsTable from "./Components/userBookings/AllBookingsTable";
import CompletedBookingsTable from "./Components/userBookings/CompletedBookingsTable";
import PendingBookingsTable from "./Components/userBookings/PendingBookingsTable";
import TodaysBookingsTable from "./Components/userBookings/TodaysBookingsTable";

import Chats from "./Components/userChat/Chats";
import AlonsoMoselyChat from "./Components/userChat/AlonsoMoselyChat";

import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import Setttings from "./Components/userSettings/Setttings";
import PolicyEditor from "./Components/userPolicy/PolicyEditor";

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
                <Route path="settings" element={<Setttings />} />
                <Route path="feedbacks&Complaints" element={<PolicyEditor />} />
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
