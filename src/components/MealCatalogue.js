import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { displayMeals } from '../redux/actions/mealAction';
import MealComponent from './MealComponent';
import Style from '../styles/MealCatalogueStyle.module.css';

const MealCatalogue = () => {
  // const meals = useSelector((state) => state); useSelector
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
    <div className={Style.displayMeal}>
      <MealComponent />
    </div>
  );
};

export default MealCatalogue;
