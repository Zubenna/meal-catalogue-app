import React from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Style from '../styles/MealComponentStyle.module.css';

const MealComponent = () => {
  const meals = useSelector((state) => state.allMeals.meals);
  const renderMeals = meals.map((meal) => {
    const { idMeal, strMeal, strMealThumb } = meal;
    return (
      <div className={Style.perMeal} key={idMeal}>
        <div className={Style.mealBox}>
          <div className={Style.imageBox}>
            <img src={strMealThumb} alt={strMeal} className={Style.img} />
          </div>
          <div className={Style.mealTitle}>
            <h3>{strMeal}</h3>
          </div>
          <Button ClassName="p-2" variant="primary">See Details</Button>
          {' '}
        </div>
      </div>
    );
  });
  return <>{renderMeals}</>;
};

export default MealComponent;
