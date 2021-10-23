import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { utilService } from '../../utils.js'
import "./CurrentDay.css";

export const CurrentDay = ({ cityName }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const singleForecast = useSelector(
    (state) => state.weatherModule.singleForecast
  );

  return (
    <div className="main-curr-day">
      <div className="curr-day-container">
        <div className="left-section">
          <img
            className="main-img"
            src={`https://developer.accuweather.com/sites/default/files/${utilService.padNum(
              singleForecast.icon
            )}-s.png`}
            alt=""
          />
          <div>
            <h1> {singleForecast.cityName} </h1>
            <h3> {singleForecast.temp}F° </h3>
          </div>
        </div>
        <div className="right-section">
          {isFavourite ? (
            <FavoriteIcon className="full-icon" />
          ) : (
            <FavoriteBorderIcon className="icon"> </FavoriteBorderIcon>
          )}
          <Button
            variant="contained"
            onClick={() => setIsFavourite(!isFavourite)}
          >
            Save to favourites
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CurrentDay;
