import ActionTypes from '../constants/action-types';

const initialState = {
  meals: [
    {
      id: 1,
      title: 'Ukwa',
      category: 'Fruits',
    },
  ],
};

const mealReducer = (state = initialState, { type }) => {
  switch (type) {
    case ActionTypes.DISPLAY_MEALS:
      return state;
    default:
      return state;
  }
};

export default mealReducer;
