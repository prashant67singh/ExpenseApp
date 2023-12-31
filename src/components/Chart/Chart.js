import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valueArr = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maximumValue = Math.max(...valueArr);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maximumValue}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
