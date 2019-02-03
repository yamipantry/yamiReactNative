import axios from 'axios';
import { webserver } from '../../../helperfunction';

const GET_YAMIDINNER = 'GET_YAMIDINNER';
const UPDATE_YAMIDINNER = 'UPDATE_YAMIDINNER';

const default_dinner = [];

const updateYamiDinner = yamiDinner => {
  return {
    type: UPDATE_YAMIDINNER,
    yamiDinner,
  };
};

export const createYamiDinner = (id, object) => async dispatch => {
  try {
    const res = await axios.put(`${webserver}/api/users/${id}`, object);
    dispatch(updateYamiDinner(res.data));
  } catch (err) {
    console.error(err);
  }
};

export default function(state = default_dinner, action) {
  switch (action.type) {
    case UPDATE_YAMIDINNER:
      return action.yamiDinner;
    case GET_YAMIDINNER:
      return action.yamiDinner;
    default:
      return state;
  }
}
