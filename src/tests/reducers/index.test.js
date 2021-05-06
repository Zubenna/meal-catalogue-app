import index from '../../redux/reducers/index';

describe('index', () => {
    it('should be a function', () => {
      const result = index;
      expect(typeof result).toBe('function');
    });
});