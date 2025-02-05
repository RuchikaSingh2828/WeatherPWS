import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d08d0148764789aaba32';

export const fetchweather = async (query) => {
    let data = null;
    await axios.get(URL, {
        params:{
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    })
    .then(function (response) {
        data = response.data;
      })
    .catch(function (error) {
        console.log(error);
        data = "ERROR";
      });
      return data;
}