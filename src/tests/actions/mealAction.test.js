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

describe('actions/selectedMeal', () => {
  let result;

  beforeEach(() => {
    result = selectedMeal('meal');
  });

  test('contains SELECTED_MEAL variable', () => {
    expect(ActionTypes.SELECTED_MEAL).toBe('SELECTED_MEAL');
  });

  test('selectedMeal returns an object with payload', () => {
    expect(result.payload).toBe('meal');
  });

  test('selectedMeal returns an object with type', () => {
    expect(result.type).toBe(ActionTypes.SELECTED_MEAL);
  });
});

describe('actions/filterChange', () => {
  let result;

  beforeEach(() => {
    result = filterChange('area');
  });

  test('contains FILTER_CHANGE variable', () => {
    expect(ActionTypes.FILTER_CHANGE).toBe('FILTER_CHANGE');
  });

  test('filterChange returns an object with payload', () => {
    expect(result.filter).toBe('area');
  });

  test('filterChange returns an object with type', () => {
    expect(result.type).toBe(ActionTypes.FILTER_CHANGE);
  });
});
