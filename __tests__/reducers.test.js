import * as types from 'constants/ActionTypes';
import reducers from 'reducers';

describe('reducers', () => {
  describe('example', () => {
    it('should return the initial state', () => {
      expect(reducers.example(undefined, {})).toEqual({
        example: 'foo'
      });
    });

    it('should return changed state', () => {
      const value = 'bar';

      expect(reducers.example(undefined, {
        type: types.CHANGE_EXAMPLE_ACTION_TYPE,
        example: value
      })).toEqual({
        example: value
      });
    });
  });
});
