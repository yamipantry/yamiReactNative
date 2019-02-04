import axios from 'axios';
import { webserver } from '../../../helperfunction';

const GET_BOOKMARKS = 'GET_BOOKMARKS'
const UPDATE_BOOKMARK = 'UPDATE_BOOKMARK'

export const getBookmarks = bookmarks => ({
  type: GET_BOOKMARKS,
  bookmarks
})

export const updateBookmark = bookmark => ({
  type: UPDATE_BOOKMARK,
  bookmark
})

export const postRanking = (obj) => async dispatch => {
  try{
    const recipeId = obj.recipeId
    const rank = obj.rank
    const {data} = await axios.put(`${webserver}/api/bookmarks`, {id: recipeId, rank: rank})
    dispatch(updateBookmark(data))
  }catch(err){
    console.log(err)
  }
}

export const allBookmarks = (id) => async dispatch => {
  try {
    const {data} = await axios.get(`${webserver}/api/bookmarks`, {params: {userId:id}})
    dispatch(getBookmarks(data))
  }catch(err) {
    console.error(err)
  }
}

const bookmarks = (state = [], action) => {
  switch(action.type) {
    case GET_BOOKMARKS:
    return action.bookmarks
    default: return state
  }
}

export default bookmarks;
