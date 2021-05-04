import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedMeal } from '../redux/actions/mealAction';
import Style from '../styles/MealDetailStyle.module.css';

const MealDetail = () => {
  const meal = useSelector((state) => state.meal);
  const { mealId } = useParams();
  const dispatch = useDispatch();
  const {
    strMealThumb, strMeal, strArea, strIngredient1, strIngredient2, strIngredient3,
    strIngredient4, strIngredient5, strInstructions,
  } = meal;
  const fetchMealDetail = () => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`, {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => {
        dispatch(selectedMeal(response.data.meals[0]));
      })
      .catch((err) => {
        console.log('Err', err);
      });
  };
  useEffect(() => {
    if (mealId && mealId !== '') {
      fetchMealDetail();
    }
  }, [mealId]);

  return (
    <div className={Style.mealContainer}>
      <div className={Style.detailContainer}>
        <div className={Style.detailImgBox}>
          <img src={strMealThumb} alt={strMeal} className={Style.img} />
        </div>
        <div>
          <div className={Style.headingBox}>
            <h3>Name:</h3>
            <p className={Style.text}>{strMeal}</p>
          </div>
          <div className={Style.headingBox}>
            <h3>Origin Area:</h3>
            <p className={Style.text}>{strArea}</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className={Style.h3}>Basic Ingredients</h3>
        <div className={Style.ingredientBox}>
          {
            `${strIngredient1}, ${strIngredient2}, ${strIngredient3},
            ${strIngredient4}, ${strIngredient5}`
          }
        </div>
        <div>
          <h3 className={Style.h3}>Instructions</h3>
          <p className={Style.instruction}>{strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
