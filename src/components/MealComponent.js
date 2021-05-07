import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Style from '../styles/MealComponentStyle.module.css';

const MealComponent = (props) => {
  const { meal } = props;
  const uniqueKey = meal.idMeal;
  return (
    <div>
      <div className={Style.mealDetails} key={uniqueKey}>
        <div className={Style.imgContainer}>
          <img src={meal.strMealThumb} data-testid="image" alt={meal.strMeal} className={Style.img} />
        </div>
        <div className={Style.mealName}>
          <h3 data-testid="name">{meal.strMeal}</h3>
        </div>
        <button type="button">
          <Link className={Style.link} to={`/meal/${uniqueKey}`}>
            <h4 className={Style.detail}>See Details</h4>
          </Link>
        </button>
      </div>
    </div>
  );
};

MealComponent.propTypes = {
  meal: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    idMeal: PropTypes.string,
  }).isRequired,
};

export default MealComponent;
