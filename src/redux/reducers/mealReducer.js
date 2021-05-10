import ActionTypes from '../constants/action-types';

const initialState = {
  meals: [],
};

export const mealReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.DISPLAY_MEALS:
      return { ...state, meals: payload };
    default:
      return state;
  }
};

export const selectedMealReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_MEAL:
      return { ...state, ...payload };
    default:
      return state;
  }
};
