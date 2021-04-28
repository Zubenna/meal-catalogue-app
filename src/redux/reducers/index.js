import { combineReducers } from 'redux';
import mealReducer from './mealReducer';

const rootReducer = combineReducers({
  allMeals: mealReducer,
});

export default rootReducer;
