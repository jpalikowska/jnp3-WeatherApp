import { ofType, combineEpics } from 'redux-observable';
import { citiesDataSelector, citiesSelector } from './selectors';
import { getCitiesForLocation, getFreshForecastForCity, getLocation } from './api';
import { startForecast, setForecast, centerOnUserLocation, setLocalisationCoords, setCurrentCities, setCurrentCitiesList } from './reducer';
import { map, mergeMap } from 'rxjs/operators';
import { from, concat, timer, of, merge } from 'rxjs';

export const fetchHourForecastEpic = (action$: any, state$: any) =>
  action$.pipe(
    ofType(startForecast.type),
    map(() => citiesSelector(state$.value)),
    mergeMap((cities: any) =>
      concat(from(cities).pipe(
        mergeMap(city =>
          from(getFreshForecastForCity(city)).pipe(
            map(setForecast),
          )
        )
      ),
        timer(3600000).pipe(map(startForecast))
      )
    )
  );


export const getCurrentPositionEpic = (action$, state$) =>
  action$.pipe(
    ofType(centerOnUserLocation.type),
    mergeMap(() =>
      from(getLocation()).pipe(
        map(position => setLocalisationCoords({ lat: position.coords.latitude, lon: position.coords.longitude }))
      ))
  );

export const getCurrentCitiesEpic = (action$, state$) =>
  action$.pipe(
    ofType(setCurrentCities.type),
    mergeMap((action) => from(getCitiesForLocation([action.payload.south, action.payload.west, action.payload.north, action.payload.east], 20)).pipe(
      map(citiesList => {
        const dataAvaliable = citiesDataSelector(state$.value);
        return { citiesList, filteredCitiesList: citiesList.filter(city => !Object.keys(dataAvaliable).includes(city)) };
      }),
      mergeMap(({ citiesList, filteredCitiesList }) =>
        merge(
          from(filteredCitiesList).pipe(
            mergeMap(city => {
              return from(getFreshForecastForCity(city.name)).pipe(
                map(setForecast)
              )
            })
          ),
          of(setCurrentCitiesList(citiesList.map(city => city.name)))
        )
      ))
    ));

export const forecastEpics = combineEpics(
  fetchHourForecastEpic,
  getCurrentPositionEpic,
  getCurrentCitiesEpic
);

