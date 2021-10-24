import React from "react";
import { useSelector } from "react-redux";
import { utilService } from "../../utils.js";
import "./SingleDayForecast.css";

export const SingleDayForecast = ({ item }) => {
  const weatherType = item.Day.IconPhrase;
  const minTemp = item.Temperature.Minimum.Value;
  const maxTemp = item.Temperature.Maximum.Value;

  const degreeType = useSelector((state) => state.weatherModule.isCelcius);

  const newDate = new Date(item.Date).getDay();
  const weekDay = new Array(7);
  weekDay[0] = "Sunday";
  weekDay[1] = "Monday";
  weekDay[2] = "Tuesday";
  weekDay[3] = "Wednseday";
  weekDay[4] = "Thursday";
  weekDay[5] = "Friday";
  weekDay[6] = "Saturday";

let cMinTemp = cToF(minTemp)
let cMaxTemp = cToF(maxTemp)
  function cToF(fTemp) {
    var fToCel = ((fTemp - 32) * 5) / 9;
    return Math.floor(fToCel);
  }

  if (!item) return <div> Loading ... </div>;
  return (
    <div className="single-day-container">
      <div>
        <img
          src={`https://developer.accuweather.com/sites/default/files/${utilService.padNum(
            item.Day.Icon
          )}-s.png`}
          alt={weatherType}
        />
      </div>
      <h3> {weekDay[newDate]}</h3>
      <h5>{weatherType}</h5>
      {degreeType ? (
        <p>
          {cMinTemp}C° - {cMaxTemp}C°
        </p>
      ) : (
        <p>
          {minTemp}F° - {maxTemp}F°
        </p>
      )}
    </div>
  );
};
