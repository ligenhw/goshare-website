import { LIST_TAGS } from '../types.js';

export const tags = (state=[], action) => {
    switch(action.type) {
        case LIST_TAGS:
          return action.payload
        default:
          return state
    }
}