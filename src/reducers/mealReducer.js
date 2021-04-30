import { FETCH_MEALS_REQUEST, FETCH_MEALS_SUCCESS, FETCH_MEALS_FAILURE } from '../actions/actionTypes';

const initialState = {
  meals: {
    meals: [],
  },
  loading: false,
  error: '',
};

const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEALS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MEALS_SUCCESS:
      return {
        loading: false,
        meals: action.payload,
        error: '',
      };
    case FETCH_MEALS_FAILURE:
      return {
        loading: false,
        meals: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default mealReducer;
