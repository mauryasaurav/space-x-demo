import { combineReducers } from "redux";

import dashboardReducer from './dashboard';

/* Import all Reducer */
const reducers = {
  dashboard: dashboardReducer
};

export const rootReducer = combineReducers(reducers);