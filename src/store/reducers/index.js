import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { articles, article, archives, profileArticles } from './articles'
import { user } from "./user";
import { comments } from './comments'
import { msg } from './msg'
import theme from './themeReducer'
import { tags } from './tag'
import { links } from './link'
import { books } from './book'
import { projects } from './project'

const rootReducer = history =>
  combineReducers({
    theme,
    user,
    articles,
    article,
    comments,
    tags,
    links,
    msg,
    archives,
    profileArticles,
    books,
    projects,
    router: connectRouter(history),
  });

export default rootReducer;