import { Grid } from "@mantine/core";
import React from "react";
import Statsbar from "./Statsbar";

const StatsbarContainer = () => {
  return (
    <Grid columns={12}>
      <Grid.Col sm={12} md={6} lg={4} xl={3}>
        <Statsbar />
      </Grid.Col>
      <Grid.Col sm={12} md={6} lg={4} xl={3}>
        <Statsbar />
      </Grid.Col>
      <Grid.Col sm={12} md={6} lg={4} xl={3}>
        <Statsbar />
      </Grid.Col>
      <Grid.Col sm={12} md={6} lg={4} xl={3}>
        <Statsbar />
      </Grid.Col>
    </Grid>
  );
};

export default StatsbarContainer;
