import {
    FETCH_MEALS_REQUEST,
    FETCH_MEALS_SUCCESS,
    FETCH_MEALS_FAILURE,
  } from './actionTypes';
  
  export const mealRequest = () => ({
    type: FETCH_MEALS_REQUEST,
  });
  
  export const mealRequestSuccess = meals => ({
    type: FETCH_MEALS_SUCCESS,
    payload: meals,
  });
  
  export const mealRequestFailure = error => ({
    type: FETCH_MEALS_FAILURE,
    payload: error,
  });
  