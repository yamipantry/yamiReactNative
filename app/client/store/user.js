import axios from 'axios';
import { webserver } from '../../../helperfunction';

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER';
const UPDATE_USER = 'UPDATE_USER';
//const REMOVE_USER = 'REMOVE_USER';

/**
 * INITIAL STATE
 */
const defaultUser = {};

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user });
const updateUser = user => ({ type: UPDATE_USER, user });
//const removeUser = () => ({ type: REMOVE_USER });

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get(`${webserver}/auth/me`);
    dispatch(getUser(res.data || defaultUser));
  } catch (err) {
    console.error(err);
  }
};

export const update = (id, object) => async dispatch => {
  console.log(object);
  try {
    const res = await axios.put(`${webserver}/api/users/${id}`, object);
    dispatch(updateUser(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const auth = (userName, password) => async dispatch => {
  let res;
  try {
    res = await axios.post(`${webserver}/auth/login`, {
      userName,
      password,
    });
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }
  try {
    dispatch(getUser(res.data));
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

// export const logout = () => async dispatch => {
//   try {
//     await axios.post('http://localhost:8080/auth/logout');
//     dispatch(removeUser());
//   } catch (err) {
//     console.error(err);
//   }
// };

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case UPDATE_USER:
      return action;
    // case REMOVE_USER:
    //   return defaultUser;
    default:
      return state;
  }
}
