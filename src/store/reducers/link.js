import { LIST_LINKS } from '../types.js';

export const links = (state=[], action) => {
    switch(action.type) {
        case LIST_LINKS:
          return action.payload
        default:
          return state
    }
}