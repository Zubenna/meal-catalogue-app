import { combineReducers } from 'redux';
import { mealReducer, selectedMealReducer } from './mealReducer';

const rootReducer = combineReducers({
  allMeals: mealReducer,
  meal: selectedMealReducer,
});

export default rootReducer;
