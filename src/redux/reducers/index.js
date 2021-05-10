import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import { mealReducer, selectedMealReducer } from './mealReducer';

const rootReducer = combineReducers({
  allMeals: mealReducer,
  meal: selectedMealReducer,
  filter: filterReducer,
});

export default rootReducer;
