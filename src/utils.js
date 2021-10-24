export const utilService = {
  padNum,
  checkFavouritesDuplication,
  saveToStorage,
  loadFromStorage,
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

  const countriesFromLocal = loadFromStorage("favourites");
  if (!countriesFromLocal) {
    arr.push(favCountry);
    saveToStorage("favourites", arr);
    return arr;
  } else {
    arr = countriesFromLocal;
    arr.push(favCountry);
    console.log('arr >>>', arr);

    // const newArr = [];
    // for (var i = 0; i < arr.length; i++) {
    //   if (arr[i].city !== favCountry.city) arr.push(favCountry);
    // }
    saveToStorage("favourites", arr);
    return arr;
  }

  saveToStorage("favourites", arr);
  return arr;
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
