import axios from 'axios';
import { webserver } from '../../../helperfunction';

const GET_RECIPES = 'GET_RECIPES';

export const getRecipes = recipes => ({
  type: GET_RECIPES,
  recipes,
});

export const recipesThunk = () => async dispatch => {
  try {
    console.log('recipes thunk')
    const recipes = await axios.get(`${webserver}/api/recipe`);
    dispatch(getRecipes(recipes.data));
  } catch (err) {
    console.error(err);
  }
};

const recipes = (state = [], action) => {
  switch (action.type) {
    case GET_RECIPES:
    console.log('im in here recipes reducer')
      return action.recipes;
    default:
      return state;
  }
};

export default recipes;
