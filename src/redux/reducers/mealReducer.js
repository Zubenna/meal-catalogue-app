import ActionTypes from '../constants/action-types';

const initialState = {
  meals: [],
};

const mealReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.DISPLAY_MEALS:
      return { ...state, meals: payload };
    default:
      return state;
  }
};

export default mealReducer;
