import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SingleFavouriteCity } from "../SingleFavouriteCity/SingleFavouriteCity";
import "./Favourites.css";

export const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  let favCitysFromLocal = JSON.parse(localStorage.getItem('favourites'))
  let favFromState = useSelector(
    (state) => state.weatherModule.favourites
  );

  if (favCitysFromLocal) {

    
    favFromState = favCitysFromLocal;
    console.log("favFromState >>>>", favFromState);
  }
  // if (favCitysFromLocal) {
  //   favFromState = favCitysFromLocal;
  // }

    useEffect(() => {
      setFavourites(favFromState);
    }, []);

  if (!favourites)
    <div>
      <h2> No Favourites Citys </h2>
    </div>;

  return (
    <div className="favourites-container">
      {favourites.map((city, index) => {
        return (
          <SingleFavouriteCity key={index} city={city}></SingleFavouriteCity>
        );
      })}
    </div>
  );
};
