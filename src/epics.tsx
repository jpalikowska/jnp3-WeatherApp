import { combineEpics } from 'redux-observable';

import { forecastEpics } from './forecast/epics';

export const rootEpic = combineEpics(
    forecastEpics
);