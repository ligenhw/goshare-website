import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { articles, article } from './articles'
import { user } from "./user";
import { comments } from './comments'
import { msg } from './msg'

const rootReducer = history =>
  combineReducers({
    user,
    articles,
    article,
    comments,
    msg,
    router: connectRouter(history),
  });

export default rootReducer;