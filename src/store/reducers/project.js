import { LIST_PROJECTS } from '../types.js';

export const projects = (state=[], action) => {
    switch(action.type) {
        case LIST_PROJECTS:
          return action.payload
        default:
          return state
    }
}