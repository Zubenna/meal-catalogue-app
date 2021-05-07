import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { displayMeals, filterChange } from '../redux/actions/mealAction';
import MealComponent from '../components/MealComponent';
import Style from '../styles/MealCatalogueStyle.module.css';
import AreaFilter from './AreaFilter';

const MealCatalogue = () => {
  const meals = useSelector((state) => state.allMeals.meals);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const fetchMeals = () => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c', {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => {
        dispatch(displayMeals(response.data.meals));
      })
      .catch(() => {
      });
  };
  useEffect(() => {
    fetchMeals();
  }, []);

  const handleFilter = (filter) => {
    dispatch(filterChange(filter));
  };

  const filteredMeals = () => {
    if (filter === 'All') return meals;
    return meals.filter((meal) => meal.strArea === filter);
  };

  return (
    <div>
      <AreaFilter handleFilter={handleFilter} />
      <table className={Style.displayMeal}>
        {filteredMeals().map((meal) => (
          <MealComponent key={meal.idMeal} meal={meal} />
        ))}
      </table>
    </div>
  );
};

export default MealCatalogue;
