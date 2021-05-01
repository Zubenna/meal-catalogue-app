import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import MealStyles from '../styles/MealStyles.module.css';

const Meal = props => {
  const { meal } = props;
  const uniqueKey = meal.idMeal;
  return (
    <tbody>
      <tr>
        <td>
          <div className={MealStyles.mealDetails}>
            <div className={MealStyles.imgContainer}>
              <img src={meal.strMealThumb} data-testid="image" className={MealStyles.img} alt="mealImg" />
            </div>
            <h4 data-testid="name">{meal.strMeal}</h4>
            <button type="button" className="btn btn-secondary">
              <Link className={Mealstyles.link} to={`/mealDetails/${uniqueKey}`}>
                <h4>Meal Details</h4>
              </Link>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

Food.propTypes = {
  food: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    idMeal: PropTypes.string,
  }).isRequired,
};

export default Meal;