import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { articles, article } from './articles'
import { user } from "./user";
import { comments } from './comments'

const rootReducer = history =>
  combineReducers({
    user,
    articles,
    article,
    comments,
    router: connectRouter(history),
  });

export default rootReducer;