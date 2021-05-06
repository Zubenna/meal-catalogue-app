import{ mealReducer, selectedMealReducer }from '../../redux/reducers/mealReducer';

describe('mealReducer', () => {
    it('should be a function', () => {
      const result = mealReducer;
      expect(typeof result).toBe('function');
    });
});

describe('selectedMealReducer', () => {
    it('should be a function', () => {
      const result = selectedMealReducer;
      expect(typeof result).toBe('function');
    });
});
  