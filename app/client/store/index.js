import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import recipes from './recipes';
import singleRecipe from './singleRecipe';
import addedBookmark from './bookmarks';
import yamiDinner from './yamiDinners';

const reducer = combineReducers({
  user,
  recipes,
  singleRecipe,
  addedBookmark,
  yamiDinner,
});

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(reducer, middleware);

export default store;
export * from './user';
export * from './recipes';
export * from './singleRecipe';
export * from './bookmarks';
export * from './yamiDinners';
