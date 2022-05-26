import React from "react";
import { Cell, Pie, PieChart } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#F9896B", "#00C49F", "#FFBB28", "#FF8042"];
const PieChartDash = () => {
  return (
    <div>
      <PieChart width={377} height={250}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={20}
          fill={COLORS[0]}
        />
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill={COLORS[1]}
          label
        />
      </PieChart>
    </div>
  );
};

export default PieChartDash;
