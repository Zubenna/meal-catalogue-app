import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { displayMeals } from '../redux/actions/mealAction';
import MealComponent from './MealComponent';

const MealCatalogue = () => {
  // /* eslint-disable no-unused-vars */
  const meals = useSelector((state) => state);
  const dispatch = useDispatch();
  // /* eslint-enable */ useDispatch
  const fetchMeals = async () => {
    // fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    // .then((res) => res.json())
    // .then((res) => {
    // if (res.error) {
    // throw (res.error);
    // }
    // console.log(res.categories);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')
      .then((response) => {
        const { meals } = response.data.meals;
        console.log('In Test', meals);
      })
      .catch((err) => {
        const errorMsg = err.message;
        console.log(errorMsg);
      });
    dispatch(displayMeals(response.data.meals));
    // console.log('Meals:', response.data);
  };

  useEffect(() => {
    fetchMeals();
  }, []);
  console.log('Meals from store:', meals);

  return (
    <div>
      <MealComponent />
    </div>
  );
};

export default MealCatalogue;
