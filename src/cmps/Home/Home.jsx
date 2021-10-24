import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  loadAutoComplete,
  saveSingleForecast,
  loadFiveDaysForecast,
  setToCelcius,
} from "../../store/actions/weatherAction";

import CurrentDay from "../CurrentDay/CurrentDay";
import { weatherService } from "../../weatherService/weatherService";
import { FiveDaysForecast } from "../FiveDaysForecast/FiveDaysForecast";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import "./Home.css";

export const Home = () => {
  const [inputData, setInputData] = useState([]);
  const [cityKey, setCityKey] = useState("215854");
  const [cityName, setCityName] = useState("Tel Aviv");
  const [className, setClassName] = useState("");
  const [celcius, setCelcius] = useState(false);

  let locationFromState = useSelector(
    (state) => state.weatherModule.currentLocation
  );
  let keyFromState = useSelector((state) => state.weatherModule.currentCityKey);

  const dispatch = useDispatch();
  const inputResults = useSelector(
    (state) => state.weatherModule.searchOptions
  );

  const handleChange = (e) => {
    const text = e.target.value;
    dispatch(loadAutoComplete(text));
  };

  const handleChanges = (key, label) => {
    setCityKey(key);
    setCityName(label);
  };

  const changeTheme = () => {
    if (!className.length) {
      setClassName("darkmode");
    } else {
      setClassName("");
    }
  };
  // const cityNameFromState = useSelector((state)=> state.weatherModule.cityName)
  // setCityName(cityNameFromState)

  const changeToCelcius = () => {
    console.log("changed...");
    setCelcius(!celcius);
    dispatch(setToCelcius(celcius));
  };

  useEffect(() => {
    const result = weatherService.organizeAutoComplete(inputResults);
    setCityName(locationFromState);
    setCityKey(keyFromState);
    setInputData(result);
    dispatch(saveSingleForecast(cityName, cityKey));
    dispatch(loadFiveDaysForecast(cityKey));
  }, [inputResults, cityKey, cityName, className]);

  return (
    <>
      <div className={className}>
        <div className="input-header">
          <button className="toggle-btn" onClick={changeTheme}>
            {" "}
            Change Theme{" "}
          </button>
          <button className="toggle-btn" onClick={changeToCelcius}>
            {" "}
            Change Temperature{" "}
          </button>
          <h2 className="header-search">Search the weather in any city:</h2>
          <Autocomplete
            className="input"
            disablePortal
            options={inputData}
            sx={{ width: 300 }}
            onInputChange={handleChange}
            onChange={(e, option) => handleChanges(option.Key, option.label)}
            renderInput={(params) => <TextField {...params} label="City" />}
          />
        </div>
        <CurrentDay cityName={cityName} />
        <FiveDaysForecast />
        <h4 className="by"> Made by Arthur Shtein</h4>
      </div>
    </>
  );
};
