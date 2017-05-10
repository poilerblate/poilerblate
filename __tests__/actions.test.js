import EXAMPLE_ACTION_TYPE from '../src/constants/ActionTypes';

import actions from '../src/actions';

describe('actions', () => {
  describe('example', () => {
    it('should return dispatchable object', () => {
      const param = 'foo';

      expect(actions.example(param)).toEqual({
        type: EXAMPLE_ACTION_TYPE,
        example: param
      });
    });
  });
});
