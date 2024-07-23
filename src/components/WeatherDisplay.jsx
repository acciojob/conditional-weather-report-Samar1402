import React from "react";

const WeatherDisplay = (props) => {
  const { temperature, conditions } = props;
  const temperatureColor = temperature > 20 ? "red" : "blue";
  return (
    <div>
      <h1 style={{ temperatureColor }}>{temperature}C</h1>
      <p>{conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
