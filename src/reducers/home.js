import { HOME_ADD, HOME_DECREMENT } from '../actions/home';

const initState = {
  count: 0,
};

export default function counter(state = initState, action) {
  switch (action.type) {
    case HOME_ADD:
      return {
        ...state,
        count: action.payload + 1,
      };

    case HOME_DECREMENT:
      return {
        ...state,
        count: action.payload - 1,
      };

    default:
      return state;
  }
}
