import { Grid, Notification } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Check, X } from "tabler-icons-react";
import Statsbar from "./Statsbar";

const StatsbarContainer = () => {
  const [getData, setData] = useState({});
  const [getRefreshing, setRefreshing] = useState(1);
  useEffect(() => {
    const url = `https://a-wep.herokuapp.com/vendor/getVendorDashboard`;
    if (getRefreshing) {
      axios
        .get(url)
        .catch((error) => {
          console.log(error);
          <Notification icon={<X size={18} />} color="red">
            {error}
          </Notification>;
        })
        .then((res) => {
          if (res.data.status === "success") {
            console.log(res.data.data);
            setData(res.data.data);
            setRefreshing(0);
            <Notification
              icon={<Check size={18} />}
              color="teal"
              title="Teal notification"
            >
              Data Fetched Successfully!
            </Notification>;
          } else {
            alert("error");
          }
        });
    }
    return;
  }, [getRefreshing]);

  return (
    <Grid columns={12}>
      <Grid.Col sm={12} md={6} lg={4} xl={3}>
        <Statsbar
          name="Total Bookings"
          count={getData.totalBookings}
          color="#4f46ba"
        />
      </Grid.Col>
      <Grid.Col sm={12} md={6} lg={4} xl={3}>
        <Statsbar
          name="Bookings Completed"
          count={getData.totalBookingsCompleted}
          color="blue"
        />
      </Grid.Col>
      <Grid.Col sm={12} md={6} lg={4} xl={3}>
        <Statsbar
          name="Bookings Pending"
          count={getData.totalBookingsPending}
          color="red"
        />
      </Grid.Col>
      <Grid.Col sm={12} md={6} lg={4} xl={3}>
        <Statsbar
          name="Bookings Cancelled"
          count={getData.totalBookingsCancelled}
          color="purple"
        />
      </Grid.Col>
      <Grid.Col>
        <Statsbar
          name="Total Profits"
          count={getData.totalBookingsProfit}
          color="black"
        />
      </Grid.Col>
    </Grid>
  );
};

export default StatsbarContainer;
