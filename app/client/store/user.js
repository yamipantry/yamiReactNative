import axios from 'axios';
import { webserver } from '../../../helperfunction';

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER';
//const REMOVE_USER = 'REMOVE_USER';

/**
 * INITIAL STATE
 */
const defaultUser = {};

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user });
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

export const auth = (email, password) => async dispatch => {
  let res;
  try {
    res = await axios.post(`${webserver}/auth/login`, {
      email,
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

export const authSignUp = (
  userName,
  email,
  password,
  password2
) => async dispatch => {
  let res;
  if (password === password2) {
    // look into toaster notification
    try {
      res = await axios.post(`${webserver}/auth/signup`, {
        userName,
        email,
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
  } else {
    console.error('sorry passwords did not match');
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
    // case REMOVE_USER:
    //   return defaultUser;
    default:
      return state;
  }
}
