import filterReducer from '../../redux/reducers/filterReducer';

describe('filterReducer', () => {
  it('should be a function', () => {
    const result = filterReducer;
    expect(typeof result).toBe('function');
  });
});
