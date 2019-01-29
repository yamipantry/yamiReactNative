import axios from "axios";
import { webserver } from "../../../helperfunction";

const SINGLE_RECIPE = "SINGLE_RECIPE"; //action

export const getSingleRecipe = recipe => ({ //action creator
  type: SINGLE_RECIPE,
  recipe
});

export const getRecipe = id => async dispatch => {//thunk
  try {
    const { data } = await axios.get(`${webserver}/api/recipe/${id}`);
    dispatch(getSingleRecipe(data));
  } catch (err) {
    console.error(err);
  }
};

const singleRecipe = (state = {}, action) => {//reducer
  switch (action.type) {
    case SINGLE_RECIPE:
      return action.recipe;
    default:
      return state;
  }
};

export default singleRecipe;
