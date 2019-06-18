import { LIST_ARTICLES, LOAD_TYPE, QUERY_ARTICLE, GET_PROFILE_ARTICLES, LIST_ARCHIVES } from '../types.js';

export const articles = (state={
  articles: [],
  loadType: 0
}, action) => {
    console.log('articles ', action.type)
    switch(action.type) {
        case LIST_ARTICLES:
          const lists = action.payload.map(a=> prepareArticle(a))
          const articles = state.articles.concat(lists)
          return {
            ...state,
            articles,
          }
        case LOAD_TYPE:
          return {
            ...state,
            loadType: action.payload,
          }
        default:
          return state
    }
}

export const profileArticles = (state=[], action) => {
  switch(action.type) {
      case GET_PROFILE_ARTICLES:
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

export const archives = (state=[], action) => {
  switch(action.type) {
    case LIST_ARCHIVES:
      return action.payload
    default:
      return state
  }
}

// ![...](url) get first img url in the markdown 
const re_img = /!\S+\((\S+)\)/

//
const re_subTitle=/#{1,2}\s?\S+\n+([^\n]+)/

const prepareArticle = (a) => ({
  ...a,
  desc: getDesc(a.content),
  img_url: a.content.match(re_img) ? a.content.match(re_img)[1] : null
})

const getDesc = (content) => {
  return content.match(re_subTitle) ? content.match(re_subTitle)[1] : ''
}