import * as types from 'constants/ActionTypes';

export default function changeExample(example) {
  return {
    type: types.CHANGE_EXAMPLE_ACTION_TYPE,
    example,
  };
}
