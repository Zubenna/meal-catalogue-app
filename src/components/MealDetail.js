import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedMeal } from '../redux/actions/mealAction';

const MealDetail = () => {
  const meal = useSelector((state) => state.meal.meals);
  const { mealId } = useParams();
  const dispatch = useDispatch();
  console.log(mealId);
  console.log(meal);
  const fetchMealDetail = () => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`, {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => {
        dispatch(selectedMeal(response.data));
      })
      .catch((err) => {
        console.log('Err', err);
      });
    // dispatch(selectedMeal(response.data));
  };
  useEffect(() => {
    if (mealId && mealId !== '') {
      fetchMealDetail();
    }
  }, [mealId]);

  return (
    <div />
  );
};

export default MealDetail;
