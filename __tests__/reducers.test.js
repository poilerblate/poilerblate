import reducers from '../src/reducers';

describe('reducers', () => {
  describe('example', () => {
    it('should return the initial state', () => {
      expect(reducers.example(undefined, {})).toEqual({
        example: 'foo'
      });
    });
  });
});
