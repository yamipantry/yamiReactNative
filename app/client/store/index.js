import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import recipes from './recipes';
import singleRecipe from './singleRecipe'

const reducer = combineReducers({ user, recipes, singleRecipe });

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(reducer, middleware);

export default store;
export * from './user';
export * from './recipes';
export * from './singleRecipe';
