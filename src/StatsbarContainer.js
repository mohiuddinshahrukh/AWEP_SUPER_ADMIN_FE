import { Button, Grid } from "@mantine/core";
import axios from "axios";
import React, { useState } from "react";
import Statsbar from "./Statsbar";

const StatsbarContainer = () => {
  const [getData, setData] = useState({});
  const [getRefresh, setRefresh] = useState(true);
  const url = `https://a-wep.herokuapp.com/vendor/getVendorDashboard`;
  React.useEffect(() => {
    if (getRefresh) {
      axios.get(url).then((res) => {
        if (res.data.status === "success") {
          console.log(res.data.data);
          setData(res.data.data);
          setRefresh(false);
        } else {
          alert("error");
        }
      });
    }
  }, [getRefresh]);
  return (
    <Grid columns={12}>
      <Grid.Col sm={12} md={6} lg={4} xl={3}>
        <Statsbar name="Total Bookings" count={getData.totalBookings} />
      </Grid.Col>
      <Grid.Col sm={12} md={6} lg={4} xl={3}>
        <Statsbar
          name="Bookings Completed"
          count={getData.totalBookingsCompleted}
        />
      </Grid.Col>
      <Grid.Col sm={12} md={6} lg={4} xl={3}>
        <Statsbar
          name="Bookings Pending"
          count={getData.totalBookingsPending}
        />
      </Grid.Col>
      <Grid.Col sm={12} md={6} lg={4} xl={3}>
        <Statsbar
          name="Bookings Cancelled"
          count={getData.totalBookingsCancelled}
        />
      </Grid.Col>
    </Grid>
  );
};

export default StatsbarContainer;
