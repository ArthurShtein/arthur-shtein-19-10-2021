import { weatherService } from "../../weatherService/weatherService";
import { useSelector } from "react-redux";

export function loadAutoComplete(searchValue) {
  return async (dispatch) => {
    const autoCompleteResult = await weatherService.getAutoComplete(
      searchValue
    );
    dispatch({ type: "SET_SEARCH_OPTIONS", autoCompleteResult });
  };
}

export function loadFiveDaysForecast(cityKey) {
  return async (dispatch) => {
    const fiveDaysResult = await weatherService.getFiveDaysForecast(cityKey);
    dispatch({ type: "SET_FIVE_DAYS_FORECAST", fiveDaysResult });
  };
}

export function loadCurrentLocation(name) {
  return async (dispatch) => {
    const currLocationResult = await weatherService.getCurrentLocation(name);
    // dispatch({ type: "SET_SINGLE_FORECAST", currLocationResult });
  };
}

export function saveToFavourites(city) {
  return (dispatch) => {
    const finalFavourites = weatherService.checkFavourites(city);
    console.log("finalFavourites >>>>", finalFavourites);
    dispatch({ type: "SET_FAVOURITES", finalFavourites });
  };
}

export function saveNewCityKey(key) {
  console.log('KEY >>>', key);
  return (dispatch) => {
    dispatch({ type: "SET_CITY_KEY", key });
  };
}

export function saveNewCityName(name){
    console.log("KEY >>>", name);
  return (dispatch)=> {
    dispatch({ type: "SET_CURRENT_LOCATION", name});
  }
}

export function saveSingleForecast(name, cityKey) {
  return async (dispatch) => {
    const currentLocationResult = await weatherService.getCurrentLocation(
      cityKey
    );
    const fTemp = currentLocationResult[0].Temperature.Imperial.Value;
    const singleNameKey = {
      cityName: name,
      cityKey: cityKey,
      temp: fTemp,
      icon: currentLocationResult[0].WeatherIcon,
    };
    dispatch({ type: "SET_SINGLE_FORECAST", singleNameKey });
    // const test = useSelector((state) => state.weatherModule.singleForecast);
    // console.log(test, '<<<< TEST ');
  };

  // return (dispatch) => {
  //   dispatch({ type: "SET_SINGLE_FORECAST", name, cityKey });
  // };
}
