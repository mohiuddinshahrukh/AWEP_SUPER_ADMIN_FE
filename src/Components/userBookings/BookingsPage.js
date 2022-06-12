import { Box, Center, Container, SegmentedControl } from "@mantine/core";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Check, Loader, Notebook, X } from "tabler-icons-react";

const BookingsPage = () => {
  let navigate = useNavigate();
  return (
    <Container fluid>
      <SegmentedControl
        color="indigo"
        fullWidth
        size="lg"
        onChange={(val) => {
          switch (val) {
            case "allBookings":
              navigate("allBookingsTable");
              break;
            case "completedBookings":
              navigate("completedBookingsTable");
              break;
            case "pendingBookings":
              navigate("pendingBookingsTable");
              break;
            case "cancelledBookings":
              navigate("todaysBookingsTable");
              break;

            default:
              break;
          }
        }}
        data={[
          {
            label: (
              <Center>
                <Notebook size={16} />
                <Box ml={10}> All Bookings</Box>
              </Center>
            ),
            value: "allBookings",
          },
          {
            label: (
              <Center>
                <Check size={16} />
                <Box ml={10}>Completed</Box>
              </Center>
            ),
            value: "completedBookings",
          },
          {
            label: (
              <Center>
                <Loader size={16} />
                <Box ml={10}>Pending</Box>
              </Center>
            ),
            value: "pendingBookings",
          },
          {
            label: (
              <Center>
                <X size={16} />
                <Box ml={10}>Cancelled</Box>
              </Center>
            ),
            value: "cancelledBookings",
          },
        ]}
      />
      <Outlet />
    </Container>
  );
};

export default BookingsPage;
