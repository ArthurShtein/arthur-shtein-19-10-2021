import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadAutoComplete,
  saveSingleForecast,
  loadFiveDaysForecast,
} from "./store/actions/weatherAction";
import { Header } from "./cmps/Header/Header";
import { CurrentDay } from "./cmps/CurrentDay/CurrentDay";
import { weatherService } from "./weatherService/weatherService";
import { FiveDaysForecast } from "./cmps/FiveDaysForecast/FiveDaysForecast";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { HashRouter, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  const [inputData, setInputData] = useState([]);
  const [cityKey, setCityKey] = useState("215854");
  const [cityName, setCityName] = useState("Tel Aviv");
  const [className, setClassName] = useState("");

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

  useEffect(() => {
    const result = weatherService.organizeAutoComplete(inputResults);
    setInputData(result);
    dispatch(saveSingleForecast(cityName, cityKey));
    dispatch(loadFiveDaysForecast(cityKey));
  }, [inputResults, cityKey, cityName, className]);

  return (
    <>

        <Header></Header>
        <div className={className}>
          {/* <button onClick={changeTheme}> toggle </button> */}
          <div className="input-header">
            <h2 className="header-search">Search the weather in any city:</h2>
            <Autocomplete
              className="input"
              disablePortal
              id="combo-box-demo"
              options={inputData}
              sx={{ width: 300 }}
              onInputChange={handleChange}
              onChange={(e, option) => handleChanges(option.Key, option.label)}
              renderInput={(params) => <TextField {...params} label="City" />}
            />
          </div>
          <CurrentDay cityName={cityName} />
          <FiveDaysForecast />
        </div>
    </>
  );
}

export default App;
