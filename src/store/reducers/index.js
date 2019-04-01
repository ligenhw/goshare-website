import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { articles, article } from './articles'
import { user } from "./user";

const rootReducer = history =>
  combineReducers({
    user,
    articles,
    article,
    router: connectRouter(history),
  });

export default rootReducer;