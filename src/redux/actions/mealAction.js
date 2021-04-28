import { ActionTypes } from '../constants/action-types';

export const displayMeals = () => ({
  type: ActionTypes.DISPLAY_MEALS,
  payload: meals,
});

export const selectedMeal = () => ({
  type: ActionTypes.SELECTED_MEAL,
  payload: meal,
});
