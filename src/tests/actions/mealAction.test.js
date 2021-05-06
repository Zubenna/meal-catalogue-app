import { displayMeals, selectedMeal, filterChange } from '../../redux/actions/mealAction';
import ActionTypes from '../../redux/constants/action-types';

describe('actions/mealAction', () => {
    test('contains DISPLAY_MEALS variable', () => {
      expect(ActionTypes.DISPLAY_MEALS).toBe('DISPLAY_MEALS');
    });
  
    test('displayMeals returns an object with type', () => {
      const result = displayMeals('meals');
      expect(result.type).toBe(ActionTypes.DISPLAY_MEALS);
    });
});