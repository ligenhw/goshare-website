import { PUBLISH_MSG, REMOVE_MSG } from '../types.js';

export const msg = (state=null, action) => {
    switch(action.type) {
        case PUBLISH_MSG:
          return action.payload
        case REMOVE_MSG:
          return null
        default:
          return state
    }
}