import React from 'react';
import { useSelector } from 'react-redux';
import MealComponent from './MealComponent';

const MealCatalogue = () => {
    const meals = useSelector((state) => state);
    return (
        <div>
           <MealComponent />
        </div>
    )
};

export default MealCatalogue;
