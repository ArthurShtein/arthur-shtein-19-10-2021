import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div> Weather App </div>
      <div className='links'>
        <Link to="/"> Home </Link>
        <Link to="/favourites"> Favourites </Link>
      </div>
    </header>
  );
};
