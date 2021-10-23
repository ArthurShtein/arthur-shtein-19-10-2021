const INITIAL_STATE = {
  currentLocation: "Tel Aviv",
  currentCityKey: "215854",
  fiveDaysForecast: [],
  searchOptions: [],
  singleForecast: {},
  favourites: [],
};

export function weatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_CURRENT_LOCATION":
      return {
        ...state,
        currentLocation: action.currentLocation,
      };
    case "SET_SEARCH_OPTIONS":
      return {
        ...state,
        searchOptions: action.autoCompleteResult,
      };
    case "SET_CITY_KEY":
      return {
        ...state,
        currentCityKey: action.key,
      };
    case "SET_FIVE_DAYS_FORECAST":
      return {
        ...state,
        fiveDaysForecast: action.fiveDaysResult,
      };
    // case "SET_CITY_NAME":
    //   return {
    //     ...state,
    //     currentLocation: action.name,
    //   };
    case "SET_SINGLE_FORECAST":
      return {
        ...state,
        singleForecast: action.singleNameKey,
      };
    case "SET_FAVOURITES":
      return {
        ...state,
        favourites: action.cityName
      };
    default:
      return state;
  }
}
