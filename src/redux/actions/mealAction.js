import ActionTypes from '../constants/action-types';

export const displayMeals = (meals) => ({
  type: ActionTypes.DISPLAY_MEALS,
  payload: meals,
});

export const selectedMeal = (meal) => ({
  type: ActionTypes.SELECTED_MEAL,
  payload: meal,
});

export const filterChange = (area) => ({
  type: ActionTypes.FILTER_CHANGE,
  filter: area,
});
