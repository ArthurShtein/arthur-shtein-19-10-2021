import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  saveToFavourites,
  toggleIsFavourite,
} from "../../store/actions/weatherAction.js";

import "./CurrentDay.css";
import { utilService } from "../../utils.js";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const CurrentDay = ({ cityName }) => {
  const dispatch = useDispatch();
  const [isFavourite, setIsFavourite] = useState(false);
  const [dayFromState, setDayFromState] = useState("");

  const singleForecast = useSelector(
    (state) => state.weatherModule.singleForecast
  );

  const degreeType = useSelector((state) => state.weatherModule.isCelcius);

  let fTemp = singleForecast.temp;
  let celciusTemp = utilService.cToF(fTemp);

  function handleClick() {
    dispatch(toggleIsFavourite(singleForecast));
    setIsFavourite(singleForecast.isFavourite);
    dispatch(saveToFavourites(singleForecast));
  }

  const checkFromFavourites = () => {
    if (singleForecast.isFavourite) {
      setIsFavourite(true);
    } else {
      setIsFavourite(false);
    }
  };

  useEffect(() => {
    checkFromFavourites();
    setDayFromState(singleForecast.cityName);
  }, [isFavourite]);

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
            {degreeType ? <h3> {celciusTemp}C°</h3> : <h3>{fTemp}F° </h3>}
          </div>
        </div>
        <div className="right-section">
          {isFavourite ? (
            <FavoriteIcon className="full-icon" />
          ) : (
            <FavoriteBorderIcon className="icon"> </FavoriteBorderIcon>
          )}
          <Button variant="contained" onClick={handleClick}>
            Save to favourites
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CurrentDay;
