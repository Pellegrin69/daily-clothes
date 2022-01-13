let url = 'http://api.weatherapi.com/v1/forecast.json?key=51a829502f044d8d88074611221301&q=Abidjan';
const headers = {
   'Content-Type': 'application/json',
   'Accept': 'application/json'
};

export const addCityToUrl = (city) => {
   url += city;
}

export const getForecast = () => {
   return fetch(url, {headers})
      .then(response => response.json())
      .catch((error) => console.log(error))
}
