import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import loadingReducer from "../reducers/loadingReducer";
import weatherReducer from "../reducers/weatherReducer";
import thunk from 'redux-thunk'

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // whats compose used for?

export const initialState = {
  currentWeather: {
   weather:{}
  },
  load: {
    loading: false,
    loaded:false,
    loadedInvalidCity:false
  },
  
};
const bigReducer = combineReducers({ currentWeather:weatherReducer, load:loadingReducer });

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
