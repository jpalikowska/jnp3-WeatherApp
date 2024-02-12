import axios from "axios";
import { WEATHER_API_KEY } from "../config";
import { Observable } from "rxjs";

const WEATHER_API_URL = "http://api.weatherapi.com/v1/current.json";

export const getFreshForecastForCity = async (city: any) => {
    const waitTime = Math.random() * 10000;
    await new Promise(r => setTimeout(r, waitTime))
    try {const response = await axios.post(WEATHER_API_URL + '?key=' + WEATHER_API_KEY + '&q=' + city + '&aqi=no');
    let freshForecast = response.data;

    if (!!!freshForecast) {
        return null;
    }

    let niceness = 0;
    if (freshForecast.current.temp_c >= 18 && freshForecast.current.temp_c <= 25)
        niceness++;
    if (freshForecast.current.precip_mm == 0.0)
        niceness++;

    return { name: freshForecast.location.name, lat: freshForecast.location.lat, lon: freshForecast.location.lon,
            temp_c: freshForecast.current.temp_c, icon: freshForecast.current.condition.icon,
            pressure_mb: freshForecast.current.pressure_mb, precip_mm: freshForecast.current.precip_mm, 
            niceness: niceness };
    } catch (err) {
        console.log(err);
        return {};
    }

};
export function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve(position);
            },
            error => {
                reject(error);
            },
        );
    });
};
export const getCitiesForLocation = async (location, numberCities) => {
    const locString = location.join(', ');
    const req = await fetch('https://www.overpass-api.de/api/interpreter', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:`[out:json];
        (
        node["place"="city"]["population"]["name:en"](${locString});
        way["place"="city"]["population"]["name:en"](${locString});
        relation["place"="city"]["population"]["name:en"](${locString});
        );
        out;`
  });
  const result = await req.json();

  const listCities = result.elements.map(element => ({name: element.tags['name:en'], population: parseInt(element.tags.population)}));
  listCities.sort(({population: pop1}, {population: pop2}) => {
    return pop2 - pop1;
  });

  return listCities.slice(0, numberCities);
}