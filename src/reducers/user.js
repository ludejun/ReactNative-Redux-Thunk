import { LOGIN_START, LOGIN_SUCCESS } from '../actions/user';

const initState = {
  logged: false,
  fetching: false,
};

export default function counter(state = initState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        fetching: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        logged: true,
        fetching: false,
      };

    default:
      return state;
  }
}
