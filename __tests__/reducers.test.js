import {
  EXAMPLE_ACTION_TYPE
} from 'constants/ActionTypes';

import reducers from '../src/reducers';

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
        type: EXAMPLE_ACTION_TYPE,
        example: value
      })).toEqual({
        example: value
      });
    });
  });
});
