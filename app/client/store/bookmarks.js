import axios from "axios";
import { webserver } from "../../../helperfunction";

const ADD_BOOKMARKED = "ADD_BOOKMARKED";

export const addBookmarkToRecipe = bookmark => ({
  type: ADD_BOOKMARKED,
  bookmark
});

export const postRanking = obj => async dispatch => {
  try {
    const recipeId = obj.recipeId;
    const rank = obj.rank;
    const userId = obj.userId;
    const newObj = { recipeId, rank };
    // OB/MS: would recommend flattening the routes, so instead of `${webserver}/api/user/${userId}/bookmarks`, have `${webserver}/api/bookmarks`
    await axios.post(`${webserver}/api/user/${userId}/bookmarks`, newObj);
    dispatch(addBookmarkToRecipe({userId, rank, recipeId}))
  } catch (err) {
    console.error(err);
  }
};

const addedBookmark = (state = {}, action) => {
  switch (action.type) {
    case ADD_BOOKMARKED:
      return action.bookmarked;
    default:
      return state;
  }
};

export default addedBookmark;
