import {
  ActionIcon,
  BackgroundImage,
  Button,
  Center,
  Divider,
  Menu,
  Modal,
  Table,
  Text,
} from "@mantine/core";
import { useModals } from "@mantine/modals";
import React, { useState } from "react";
import {
  ArrowsLeftRight,
  Container,
  Edit,
  Eye,
  MessageCircle,
  Photo,
  Plus,
  Search,
  Settings,
  Trash,
} from "tabler-icons-react";
import { AllBookingsTableData } from "./AllBookingsTableData.js";
import axios from "axios";
const CompletedBookingsTable = () => {
  const fetch = () => {
    axios
      .get(
        "https://a-wep.herokuapp.com/superAdmin/getAllVendorPackageBookings/5126bbf64aed4daf9e2ab771",
        {
          headers: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGUzMWEwYzdiZjBkMTM1Mjk3OGVkZSIsImVtYWlsIjoibXVoYW1tYWR0YWxoYTUxN0BnbWFpbC5jb20iLCJ1c2VyVHlwZSI6InN1cGVyQWRtaW4iLCJpYXQiOjE2NTM1NjA1NDksImV4cCI6NDI0NTU2MDU0OX0.a0kss8hgIiVNYLaw56YXfWpMjldkccMbsMs6v__ZEdg",
          },
        }
      )
      .then((data) => {
        console.log(data.data);
      });
  };
  const [rowData, setRowData] = useState(AllBookingsTableData);
  const [opened, setOpened] = useState(false);
  const modals = useModals();

  const rows = rowData.map((data) => {
    return (
      <>
        <tr key={data.sr}>
          <td>{data.sr}</td>
          <td>{data.bookingId}</td>
          <td>{data.package}</td>
          <td>
            {data.customer.customerName} {data.customer.bookingDate}
          </td>
          <td>
            {data.completion.completionDate} {data.completion.completionTime}
          </td>
          <td>
            {data.payment.paymentStatus} {data.payment.paymentAmount}
          </td>
          <td>
            {data.status.bookingStatus} {data.status.paymentStatus}
          </td>
          <td>
            <Center>
              <ActionIcon
                onClick={() => {
                  modals.openConfirmModal({
                    title: "Please confirm your action",
                    children: (
                      <Text size="sm">
                        This action is so important that you are required to
                        confirm it with a modal. Please click one of these
                        buttons to proceed.
                      </Text>
                    ),
                    labels: { confirm: "Confirm", cancel: "Cancel" },
                    onCancel: () => console.log("Cancel"),
                    onConfirm: () => console.log("Confirmed"),
                  });
                }}
              >
                <Eye color="blue" />
              </ActionIcon>
              <ActionIcon onClick={() => {}}>
                <Edit color="orange" />
              </ActionIcon>
              <ActionIcon>
                <Trash color="red" />
              </ActionIcon>
            </Center>
          </td>
        </tr>
      </>
    );
  });
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>SR#</th>
            <th>Booking ID</th>
            <th>Package</th>
            <th>Customer</th>
            <th>Date/ Time</th>
            <th>Payment</th>
            <th>Booking Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
        <tfoot></tfoot>
      </Table>
      {rowData.length === 0 ? (
        <BackgroundImage
          style={{ height: "100%", width: "100%" }}
          src={require("./images/sitChair.png")}
        >
          <Center p="md">
            <Text color="#000">
              BackgroundImage component can be used to add any content on image.
              It is useful for hero headers and other similar sections
            </Text>
          </Center>
        </BackgroundImage>
      ) : (
        ""
      )}
    </div>
  );
};
export default CompletedBookingsTable;
