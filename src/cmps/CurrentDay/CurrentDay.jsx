import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { utilService } from "../../utils.js";
import { useDispatch, useSelector } from "react-redux";
import { saveToFavourites } from "../../store/actions/weatherAction.js";
import "./CurrentDay.css";

export const CurrentDay = ({ cityName }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const favourites = useSelector((state) => state.weatherModule.favourites);

  const dispatch = useDispatch();

  const singleForecast = useSelector(
    (state) => state.weatherModule.singleForecast
  );

  const degreeType = useSelector((state) => state.weatherModule.isCelcius);

  let fTemp = singleForecast.temp;
  let celciusTemp = cToF(fTemp);
  function cToF(fTemp) {
    var fToCel = ((fTemp - 32) * 5) / 9;
    return Math.floor(fToCel);
  }

  function handleClick() {
    setIsFavourite(!isFavourite);
    dispatch(saveToFavourites(singleForecast));
  }

  return (
    <div className="main-curr-day">
      <div className="curr-day-containגer">
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
