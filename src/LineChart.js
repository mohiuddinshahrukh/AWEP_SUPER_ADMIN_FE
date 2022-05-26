import React from "react";
import LineChartDash from "./LineChartDash";

const LineChart = () => {
  return (
    <div className="system-acc-analytics-lineChart">
      <div className="system-acc-analytics-lineChart-label-dropdown">
        <h3>Yearly Revenue (Earned By Subscriptions)</h3>
        <select className="system-acc-analytics-lineChart-select" name="" id="">
          <option value="">Yearly</option>
          <option value="">Monthly</option>
          <option value="">Daily</option>
        </select>
      </div>

      <LineChartDash />
    </div>
  );
};

export default LineChart;
