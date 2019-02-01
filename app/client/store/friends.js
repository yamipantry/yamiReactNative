import axios from 'axios';
import { webserver } from '../../../helperfunction';

/**
 * ACTION TYPES
 */
const GET_FRIENDS = 'GET_FRIENDS';
const UPDATE_FRIENDS = 'UPDATE_FRIENDS';
const REMOVE_FRIENDS = 'REMOVE_FRIENDS';

/**
 * INITIAL STATE
 */
const initialstate = {};

/**
 * ACTION CREATORS
 */
const getFriends = friends => ({ type: GET_FRIENDS, friends });
const updateFriends = friends => ({ type: UPDATE_FRIENDS, friends });
const removeFriends = () => ({ type: REMOVE_FRIENDS });

/**
 * THUNK CREATORS
 */

// should include each friend's pantry items.
export const friendsList = () => async dispatch => {
  try {
    const res = await axios.get(`${webserver}/api/friends`);
    dispatch(getFriends(res.data || initialstate));
  } catch (err) {
    console.error(err);
  }
};

export const addFriend = friend => async dispatch => {
  try {
    const res = await axios.put(`${webserver}/api/friends/`, friend);
    dispatch(updateFriends(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const removeFriend = id => async dispatch => {
  try {
    await axios.delete(`${webserver}/api/friends/${id}`);
    dispatch(removeFriends());
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */

export default function(state = initialstate, action) {
  switch (action.type) {
    case GET_FRIENDS:
      return action.friends;
    case UPDATE_FRIENDS:
      return action.friends;
    case REMOVE_FRIENDS:
      return initialstate;
    default:
      return state;
  }
}
