export const utilService = {
  padNum,
  checkFavouritesDuplication,
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
  console.log("favCountry", favCountry);
  let arr = [];

  const countriesFromLocal = _loadFromStorage("favourites");
  if (!countriesFromLocal) {
    arr.push(favCountry);
    _saveToStorage("favourites", arr);
    return arr;
  } else {
    arr = countriesFromLocal;
    arr.push(favCountry);
    console.log('arr >>>', arr);

    // const newArr = [];
    // for (var i = 0; i < arr.length; i++) {
    //   if (arr[i].city !== favCountry.city) arr.push(favCountry);
    // }
    _saveToStorage("favourites", arr);
    return arr;
  }

  _saveToStorage("favourites", arr);
  return arr;
}

function _saveToStorage(key, data) {
  var json = JSON.stringify(data);
  localStorage.setItem(key, json);
}

function _loadFromStorage(key) {
  var json = localStorage.getItem(key);
  var data = JSON.parse(json);
  return data;
}
