import axios from 'axios';
import { webserver } from '../../../helperfunction';

const GET_YAMIDINNER = 'GET_YAMIDINNER';
const UPDATE_YAMIDINNER = 'UPDATE_YAMIDINNER';

const getYamiDinner = allDinners => {
  return {
    type: GET_YAMIDINNER,
    allDinners,
  };
};

const updateYamiDinner = yamiDinner => {
  return {
    type: UPDATE_YAMIDINNER,
    yamiDinner,
  };
};

export const yamiDinners = () => async dispatch => {
  try {
    const res = await axios.get(`${webserver}/api/yamiDinners`);
    dispatch(getYamiDinner(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const createYamiDinner = object => async dispatch => {
  try {
    console.log(object);
    const res = await axios.post(`${webserver}/api/yamiDinners`, object);
    dispatch(updateYamiDinner(res.data));
  } catch (err) {
    console.error(err);
  }
};

const defaultDinner = [];
export default function(state = defaultDinner, action) {
  switch (action.type) {
    case UPDATE_YAMIDINNER:
      return action.yamiDinner;
    case GET_YAMIDINNER:
      return action.allDinners;
    default:
      return state;
  }
}
