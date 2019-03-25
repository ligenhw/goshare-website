import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { articles, article } from './articles'

const rootReducer = history =>
  combineReducers({
    articles,
    article,
    router: connectRouter(history),
  });

export default rootReducer;