import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import recipes from './recipes';
import friends from './friends';
import singleRecipe from './singleRecipe'
import bookmarks from './bookmarks'
import yamiDinners from './yamiDinners'

const reducer = combineReducers({ user, recipes, singleRecipe, bookmarks, yamiDinners, friends });


const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(reducer, middleware);

export default store;
export * from './user';
export * from './recipes';
export * from './singleRecipe';
export * from './bookmarks';
export * from './friends';
export * from './yamiDinners';

