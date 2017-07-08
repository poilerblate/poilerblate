import * as types from 'constants/ActionTypes';
import actions from 'actions';

describe('actions', () => {
  describe('example', () => {
    it('should return dispatchable object', () => {
      const param = 'foo';

      expect(actions.example(param)).toEqual({
        type: types.EXAMPLE_ACTION_TYPE,
        example: param
      });
    });
  });
});
