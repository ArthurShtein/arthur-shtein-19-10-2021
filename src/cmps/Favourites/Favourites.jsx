import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const Favourites = () => {
  //   const favourites = useSelector((state) => state.weatherModule.favourites);
  //   console.log(favourites);

  useEffect(() => {
    let favouritesFromData = JSON.parse(localStorage.getItem("favourites"));
  }, []);

  return <div></div>;
};
