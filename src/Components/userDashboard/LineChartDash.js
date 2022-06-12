import { Grid } from "@mantine/core";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";
const data = [
  {
    name: "Jan",
    Revenue: 750,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    Revenue: 1000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    Revenue: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    Revenue: 1000,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    Revenue: 1500,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    Revenue: 1700,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    Revenue: 1800,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    Revenue: 300,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Sept",
    Revenue: 3000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    Revenue: 2500,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    Revenue: 4000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    Revenue: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const LineChartDash = () => {
  return (
    <Grid>
      <Grid.Col>
        <AreaChart
          width={701.38}
          height={287.51}
          data={data}
          margin={{ top: 5, right: 25, bottom: 5, left: 10 }}
        >
          <defs>
            <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={"#4CDFE8"} stopOpacity={0.5} />
              <stop offset="95%" stopColor="#7947F7" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="colorStroke" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={"#4CDFE8"} stopOpacity={1} />
              <stop offset="95%" stopColor="#7947F7" stopOpacity={1} />
            </linearGradient>
          </defs>

          <CartesianGrid vertical={false} strokeDasharray="5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="Revenue"
            stroke="url(#colorStroke)"
            fill="url(#colorFill)"
          />
        </AreaChart>
      </Grid.Col>
    </Grid>
  );
};

export default LineChartDash;
