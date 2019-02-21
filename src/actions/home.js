export const HOME_ADD = 'HOME_ADD';
export const HOME_DECREMENT = 'HOME_DECREMENT';

export function homeAdd(payload) {
  return {
    type: HOME_ADD,
    payload,
  };
}

export function homeDecrement(payload) {
  return {
    type: HOME_DECREMENT,
    payload,
  };
}
