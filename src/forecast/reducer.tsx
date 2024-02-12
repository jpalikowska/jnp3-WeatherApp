import { createSlice } from '@reduxjs/toolkit';
import { CHART_TYPE } from './const';

export const FORECAST_REDUCER_NAME = 'forecast';

const initialState = {
    location: [48.8566, 2.3522],
    currentCitiesData: {},
    chartType: CHART_TYPE.TEMP,
    currentCities: [],
    displayedCities: []
}

const forecastSlice = createSlice({
    name: FORECAST_REDUCER_NAME,
    initialState,
    reducers: {
        chooseChart: (state, { payload }) => {
            state.chartType = payload;
        },
        startForecast: () => {
            console.log('getting fresh forecast');
        },
        setForecast: (state, { payload }) => {
            state.currentCitiesData[payload.name] = payload;
            console.log("set forecast ", payload.name);
        },
        clearFilters: (state) => {
            state.displayedCities = state.currentCities.slice();
        },
        addNameFilter: (state, { payload }) => {
            state.displayedCities = state.displayedCities.filter((city) => city.toLowerCase().includes(payload.toLowerCase()));
        },
        centerOnUserLocation: () => {
            console.log('center map');
        },
        setLocalisationCoords: (state, { payload: { lat, lon } }) => {
            state.location = [lat, lon];
        },
        setCurrentCities: (state, { payload }) => {
            console.log('map move');
        },
        setCurrentCitiesList: (state, { payload }) => {
            state.currentCities = payload;
            state.displayedCities = payload;
            console.log("changing", payload);
        }
    },
})

export const {
    chooseChart,
    startForecast,
    setForecast,
    clearFilters,
    addNameFilter,
    centerOnUserLocation,
    setLocalisationCoords,
    setCurrentCities,
    setCurrentCitiesList
} = forecastSlice.actions

export const forecastReducer = forecastSlice.reducer