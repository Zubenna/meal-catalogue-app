import axios from 'axios';
import { mealRequest, mealRequestSuccess, mealRequestFailure } from '../actions/index';

const fetchMeals = () => dispatch => {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';
  dispatch(mealRequest);
  axios.get(url, {
    method: 'GET',
    mode: 'cors',
  })
    .then(response => {
      const mealRes = response.data;
      dispatch(mealRequestSuccess(mealRes));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(mealRequestFailure(errorMsg));
    });
};

export default fetchMeals;