import request from '../utils/fakeRequest';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function login(payload) {
  return dispatch => {
    dispatch({ type: LOGIN_START });
    return request(payload, 1500).then(data => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
    });
  };
}
