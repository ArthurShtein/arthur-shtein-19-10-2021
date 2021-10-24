import React from "react";
import { useHistory } from "react-router-dom";
import { utilService } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  saveNewCityKey,
  saveNewCityName,
} from "../../store/actions/weatherAction";
import "./SingleFavouriteCity.css";

export const SingleFavouriteCity = ({ city }) => {
  const { cityName, cityKey, temp, icon } = city;

  let history = useHistory();
  const dispatch = useDispatch();
  const goToHomePage = () => {
    history.push({
      pathname: "/",
      // state: (cityKey, cityName)
    });
  };
  const handleClick = () => {
    dispatch(saveNewCityKey(cityKey));
    dispatch(saveNewCityName(cityName));
    goToHomePage();
  };

  return (
    <div className="single-fav-container" onClick={handleClick}>
      <img
        className="main-img"
        src={`https://developer.accuweather.com/sites/default/files/${utilService.padNum(
          icon
        )}-s.png`}
        alt=""
      />
      <h2>{cityName} </h2>
      <p> {temp}F° </p>
    </div>
  );
};
