import { LIST_ARTICLES, QUERY_ARTICLE } from '../types.js';

export const articles = (state=[], action) => {
    switch(action.type) {
        case LIST_ARTICLES:
          return action.payload
        default:
          return state
    }
}

export const article = (state={
  title: '',
  content: ''
}, action) => {
    switch(action.type) {
        case QUERY_ARTICLE:
          return {...action.payload}
        default:
          return state
    }
}