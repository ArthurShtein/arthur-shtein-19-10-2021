import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFiveDaysForecast, saveNewCityName } from "../../store/actions/weatherAction";
import { SingleDayForecast } from "../SingleDayForecast/SingleDayForecast"
import './FiveDaysForecast.css'

export const FiveDaysForecast = () => {
  const keyResult = useSelector((state) => state.weatherModule.currentCityKey); // PROPS MAYBE?
  const fiveDaysForecast = useSelector(
    (state) => state.weatherModule.fiveDaysForecast
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFiveDaysForecast(keyResult));
    // dispatch(saveNewCityName(keyResult));
  }, [keyResult]);

  return (
    <div className='five-days-container'>
      {fiveDaysForecast.map((item, index) =>{ 
          return <SingleDayForecast key={index} item={item}/>
      })}
    </div>
  );
};
