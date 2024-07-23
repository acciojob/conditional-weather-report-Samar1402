import React from "react";

const WeatherDisplay = (props) => {
  const { temperature, conditions } = props;
  const temperatureColor = temperature > 20 ? "red" : "blue";
  return (
    <div>
      <p>
        Temperature: <span style={{ temperatureColor }}>{temperature}</span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
