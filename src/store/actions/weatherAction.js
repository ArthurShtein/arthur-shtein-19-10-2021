import { weatherService } from "../../weatherService/weatherService";

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

export function saveToFavourites(city) {
  return (dispatch) => {
    const finalFavourites = weatherService.checkFavourites(city);
    dispatch({ type: "SET_FAVOURITES", finalFavourites });
  };
}

export function setToCelcius(boolean) {
  return (dispatch) => {
    dispatch({ type: "SET_TO_CELCIUS", boolean });
  };
}

export function saveNewCityKey(key) {
  return (dispatch) => {
    dispatch({ type: "SET_CITY_KEY", key });
  };
}

export function saveNewCityName(name) {
  return (dispatch) => {
    dispatch({ type: "SET_CURRENT_LOCATION", name });
  };
}

export function toggleIsFavourite(cityObject) {
  console.log("cityObject >>> ", cityObject);
  return (dispatch) => {
    cityObject.isFavourite = !cityObject.isFavourite;
    console.log("After Change isFavourite >>> ", cityObject);
    dispatch({ type: "TOGGLE_FAVOURITE_CITY", cityObject });
  };
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
      isFavourite: false,
    };
    dispatch({ type: "SET_SINGLE_FORECAST", singleNameKey });
  };
}
