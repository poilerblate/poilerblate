import actions from 'actions';
import * as types from 'constants/ActionTypes';

describe('actions', () => {
  describe('example', () => {
    it('should return dispatchable object', () => {
      const param = 'foo';

      expect(actions.changeExample(param)).toEqual({
        type: types.CHANGE_EXAMPLE_ACTION_TYPE,
        example: param,
      });
    });
  });
});
