import axios from 'axios';
import { webserver } from '../../../helperfunction';

const ADD_BOOKMARKED = 'ADD_BOOKMARKED';

export const addBookmarkToRecipe = bookmark => ({
  type: ADD_BOOKMARKED,
  bookmark,
});

export const postRanking = obj => async dispatch => {
  try {
    const recipeId = obj.recipeId;
    const rank = obj.rank;
    const newObj = { recipeId, rank };
    await axios.post(`${webserver}/api/bookmarks`, newObj);
    dispatch(addBookmarkToRecipe({ rank, recipeId }));
  } catch (err) {
    console.error(err);
  }
};

const addedBookmark = (state = {}, action) => {
  switch (action.type) {
    case ADD_BOOKMARKED:
      return action.bookmark;
    default:
      return state;
  }
};

export default addedBookmark;
