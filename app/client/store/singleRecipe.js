import axios from "axios";
import { webserver } from "../../../helperfunction";

const SINGLE_RECIPE = "SINGLE_RECIPE"; //action
import {REMOVE_USER} from './user'

export const getSingleRecipe = recipe => ({ //action creator
  type: SINGLE_RECIPE,
  recipe
});

export const getRecipe = id => async dispatch => {//thunk
  try {
    console.log('hello world')
    const { data } = await axios.get(`${webserver}/api/recipe/${id}`);
    console.log('data', data)
    dispatch(getSingleRecipe(data));
  } catch (err) {
    console.error(err);
  }
};

const singleRecipe = (state = {}, action) => {//reducer
  switch (action.type) {
    case SINGLE_RECIPE:
      return action.recipe;
      case REMOVE_USER:
      return {}
    default:
      return state;
  }
};

export default singleRecipe;
