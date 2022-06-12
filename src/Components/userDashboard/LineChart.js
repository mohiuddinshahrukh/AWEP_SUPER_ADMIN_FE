import { Grid, Select, Title } from "@mantine/core";
import React, { useState } from "react";
import LineChartDash from "./LineChartDash";

const LineChart = (props) => {
  const [data, setData] = useState(["Yearly", "Monthly", "Weekly", "Daily"]);
  return (
    <Grid my="md" style={{ border: "1px solid #EAEAEA" }}>
      <Grid.Col span={9}>
        <Title order={3}>{props.lineChartTitle}</Title>
      </Grid.Col>
      <Grid.Col span={3}>
        <Select
          data={data}
          nothingFound="Nothing found"
          defaultValue={data[0]}
          searchable
          creatable
          getCreateLabel={(query) => `+ Create ${query}`}
          onCreate={(query) => setData((current) => [...current, query])}
        />
      </Grid.Col>

      <LineChartDash />
    </Grid>
  );
};

export default LineChart;
