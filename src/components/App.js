import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import WeatherDisplay from "../components/WeatherDisplay";

const App = () => {
  const [weather, setWeather] = useState({
    temperature: 0,
    consitions: "",
  });
  useEffect(() => {
    setWeather({ temperature: 25, conditions: "Sunny" });
  }, []);
  return (
    <div>
      <WeatherDisplay {...weather} />
    </div>
  );
};

export default App;
