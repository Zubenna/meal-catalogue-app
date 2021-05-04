import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { displayMeals } from '../redux/actions/mealAction';
import MealComponent from './MealComponent';
import Style from '../styles/MealCatalogueStyle.module.css';

const MealCatalogue = () => {
  const meals = useSelector((state) => state.allMeals.meals);
  const dispatch = useDispatch();
  const fetchMeals = () => {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef', {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => {
        dispatch(displayMeals(response.data.meals));
      })
      .catch((err) => {
        console.log('Err', err);
      });
  };
  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <table className={Style.displayMeal}>
      {meals.map((meal) => (
        <MealComponent key={meal.idMeal} meal={meal} />
      ))}
    </table>
  );
};

export default MealCatalogue;
