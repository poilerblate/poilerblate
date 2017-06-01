import {
  EXAMPLE_ACTION_TYPE
} from '../constants/ActionTypes';

export default function example(state = {
  example: 'foo'
}, action) {
  if (EXAMPLE_ACTION_TYPE === action.type) {
    return Object.assign({}, state, {
      example: action.example
    });
  }

  return state;
}
