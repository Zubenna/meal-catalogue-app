import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import fetchMeals from '../apiCalls/makeRequest';
import Meal from '../components/Meal';

const MealDisplay = props => {
  const { meals, fetchedMeals } = props;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    fetchedMeals(meals);
  }, []);

  return (
    <div className={}>
      {loading === true
        ? (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={150}
            width={150}
            timeout={3000} // 3 secs
          />
        )
        : (
          <table className="d-flex flex-wrap">
            {filteredFoods.map(food => (
              <Food key={food.idMeal} food={food} />
            ))}
          </table>
        )}
    </div>
  );
};

MealDisplay.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    area: PropTypes.string,
    instructions: PropTypes.string,
  })).isRequired,
  fetchedMeals: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  filtered: PropTypes.string,
};

MealDisplay.defaultProps = {
  filtered: null,
};

const mapStateToProps = state => ({
  meals: state.meal.meals.meals,
  // filtered: state.filter,
});

const mapDispatchToProps = dispatch => ({
  fetchedMeals: meals => dispatch(fetchMeals(meals)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MealDisplay);
