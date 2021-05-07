import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../redux/reducers/index';
import MealDetail from './MealDetail';

const MealDetailWrapper = () => {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <MealDetail />
    </Provider>
  );
};

export default MealDetailWrapper;
