export const utilService = {
  padNum,
  checkFavouritesDuplication,
  saveToStorage,
  loadFromStorage,
  cToF,
};

function padNum(number) {
  const strNum = number + "";
  if (strNum.length === 1) {
    return "0" + strNum;
  } else {
    return strNum;
  }
}

function checkFavouritesDuplication(favCountry) {
  let arr = [];

  const countriesFromLocal = loadFromStorage("favourites");
  if (!countriesFromLocal) {
    arr.push(favCountry);
    saveToStorage("favourites", arr);
    return arr;
  } else {
    arr = countriesFromLocal;
    arr.push(favCountry);
    saveToStorage("favourites", arr);
    return arr;
  }
}

  function cToF(fTemp) {
    var fToCel = ((fTemp - 32) * 5) / 9;
    return Math.floor(fToCel);
  }

function saveToStorage(key, data) {
  var json = JSON.stringify(data);
  localStorage.setItem(key, json);
}

function loadFromStorage(key) {
  var json = localStorage.getItem(key);
  var data = JSON.parse(json);
  return data;
}
