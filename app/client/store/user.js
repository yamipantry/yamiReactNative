import axios from 'axios';

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
    const res = await axios.get('http://localhost:8080/auth/me');
    dispatch(getUser(res.data || defaultUser));
  } catch (err) {
    console.error(err);
  }
};

export const auth = (userName, password) => async dispatch => {
  let res;
  try {
    console.log('this is before axios', userName, password);
    res = await axios.post(`http://10.1.41.32:8080/auth/login`, {
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
    // case REMOVE_USER:
    //   return defaultUser;
    default:
      return state;
  }
}
