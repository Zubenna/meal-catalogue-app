import React from 'react';
import { useSelector } from 'react-redux';
import Style from '../styles/FilterStyle.module.css';

const Filter = () => {
  const meals = useSelector((state) => state.allMeals.meals);
  return (
    <div className={Style.filterBox}>
      <div>
        Total Meals:
        {'  '}
        {meals.length}
      </div>
      <div>
        Origin Area
        <select>
          <option value="">All</option>
          <option value="French">French</option>
          <option value="Mexican">Mexican</option>
          <option value="British">British</option>
          <option value="Indian">Indian</option>
          <option value="Italian">Italian</option>
          <option value="American">American</option>
          <option value="Mexican">Mexican</option>
          <option value="Japanese">Japanese</option>
          <option value="Moroccan">Moroccan</option>
          <option value="Canadian">Canadian</option>
          <option value="Jamaican">Jamaican</option>
          <option value="Chinese">Chinese</option>
          <option value="Tunisian">Tunisian</option>
          <option value="Turkish">Turkish</option>
          <option value="Irish">Irish</option>
          <option value="Greek">Greek</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
