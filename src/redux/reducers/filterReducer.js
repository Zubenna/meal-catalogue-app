import ActionTypes from '../constants/action-types';

const initialState = 'All';

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FILTER_CHANGE:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
