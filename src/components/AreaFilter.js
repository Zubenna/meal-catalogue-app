import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Style from '../styles/AreaFilterStyle.module.css';

const AreaFilter = (props) => {
  const meals = useSelector((state) => state.allMeals.meals);
  const AREAS = [
    'All',
    'French',
    'Mexican',
    'British',
    'Indian',
    'Italian',
    'American',
    'Japanese',
    'Moroccan',
    'Canadian',
    'Jamaican',
    'Chinese',
    'Tunisian',
    'Turkish',
    'Irish',
    'Greek',
    'Unknown',
  ];

  const { handleFilter } = props;

  const handleClick = (event) => {
    const { value } = event.target;
    handleFilter(value);
  };

  return (
    <div className={Style.filterBox}>
      <div>
        <span className={Style.menuTitle}>Total meals retrieved originally:</span>
        {meals.length}
      </div>
      <div>
        <span className={Style.menuTitle}>Filter By Origin Area:</span>
        <select name="area" id="select" onChange={handleClick}>
          {AREAS.map((area) => <option value={area} key={area}>{area}</option>)}
        </select>
      </div>
    </div>
  );
};

AreaFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default AreaFilter;
