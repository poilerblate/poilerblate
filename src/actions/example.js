import {
  EXAMPLE_ACTION_TYPE
} from '../constants/ActionTypes';

export default function example(example) {
  return {
    type: EXAMPLE_ACTION_TYPE,
    example
  }
}
