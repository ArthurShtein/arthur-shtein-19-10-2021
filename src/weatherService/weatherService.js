import axios from "axios";
import { utilService } from "../utils";

export const weatherService = {
  getCurrentLocation,
  getAutoComplete,
  getFiveDaysForecast,
  organizeAutoComplete,
  checkFavourites,
};

// const API_KEY = "O8PwbBOpA3ugM6K1RbYuVKYOGk1fI1mf";
const API_KEY = "4aBBAPNL6URV8G56agI6OJks01WPFlSa";

// CURRENT LOCATION API
async function getCurrentLocation(locationKey) {
  try {
    const { data } = await axios.get(
      `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

// AUTO COMPLETE API
async function getAutoComplete(searchValue) {
  try {
    let { data } = await axios.get(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${searchValue}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

// 5 DAYS FORECAST API
async function getFiveDaysForecast(locationKey) {
  try {
    let { data } = await axios.get(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`
    );
    return data.DailyForecasts;
  } catch (error) {
    console.log(error);
  }
}

function organizeAutoComplete(arr) {
  return arr.map((item) => {
    return { label: item.LocalizedName, Key: item.Key };
  });
}

function checkFavourites(city) {
  let favCountrys = [];
  let favCountrysFromLocal = utilService.loadFromStorage("favourites"); //NULL
  if (favCountrysFromLocal) favCountrys = favCountrysFromLocal;

  const checkCityInFav = favCountrys.find(
    (item) => item.cityName === city.cityName
  );
  if (!checkCityInFav) {
    favCountrys.push(city);
    utilService.saveToStorage("favourites", favCountrys);
    return favCountrys;
  } else {
    const noDuplicationsFavs = favCountrys.filter(
      (item) => item.cityName !== city.cityName
    );
    utilService.saveToStorage("favourites", noDuplicationsFavs);
    return noDuplicationsFavs;
  }
}
