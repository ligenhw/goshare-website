import { LIST_ARTICLES, QUERY_ARTICLE } from '../types.js';

export const articles = (state=[], action) => {
    switch(action.type) {
        case LIST_ARTICLES:
          const lists = action.payload.map(a=> prepareArticle(a))
          return lists
        default:
          return state
    }
}

export const article = (state={
  user: {},
  blog: {},
}, action) => {
    switch(action.type) {
        case QUERY_ARTICLE:
          return action.payload
        default:
          return state
    }
}

// ![...](url) get first img url in the markdown 
const re_img = /!\S+\((\S+)\)/

const prepareArticle = (a) => ({
  ...a,
  desc: a.content.length > 100 ? a.content.substring(0, 100) + ' ...' : a.content.substring(100),
  img_url: a.content.match(re_img) ? a.content.match(re_img)[1] : null
})