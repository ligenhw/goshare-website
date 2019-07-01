import { LIST_BOOKS } from '../types.js';

export const books = (state=[], action) => {
    switch(action.type) {
        case LIST_BOOKS:
          return action.payload
        default:
          return state
    }
}