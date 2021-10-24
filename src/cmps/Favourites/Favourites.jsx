import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SingleFavouriteCity } from "../SingleFavouriteCity/SingleFavouriteCity";
import "./Favourites.css";

export const Favourites = () => {
  // const [favCitys, setFavCitys] = useState([]);
  const favourites = useSelector((state) => state.weatherModule.favourites);
  // setFavCitys(favourites);


  if (!favourites) return <div> No Favourites Citys </div>;
  return (
    <div className="favourites-container">
      {favourites.map((city, index) => {
        return <SingleFavouriteCity city={city}></SingleFavouriteCity>;
      })}
    </div>
  );
};
