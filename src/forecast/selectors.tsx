import { createSelector } from '@reduxjs/toolkit'
import { FORECAST_REDUCER_NAME } from './reducer'

export const selectForecastState = (state: any) => state[FORECAST_REDUCER_NAME];

export const locationSelector = createSelector(
    selectForecastState,
    ({ location }) => location
);
export const citiesDataSelector = createSelector(
    state => state[FORECAST_REDUCER_NAME].currentCitiesData,
    (currentCitiesData) => Object.values(currentCitiesData)
);
export const citiesSelector = createSelector(
    selectForecastState,
    ({ currentCities }) => currentCities
);
export const displayedCitiesSelector = createSelector(
    selectForecastState,
    ({ displayedCities }) => displayedCities
);
export const displayedCitiesDataSelector = createSelector(
    state => state[FORECAST_REDUCER_NAME].currentCitiesData,
    state => state[FORECAST_REDUCER_NAME].displayedCities,
    ( currentCitiesData: any, displayedCities ) => Object.values(currentCitiesData).filter((city: any) => displayedCities.includes(city.name))
);

export const chartSelector = createSelector(
    selectForecastState,
    ({ chartType }) => chartType
);