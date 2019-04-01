import { GET_USER } from '../types.js';

export const user = (state=[], action) => {
    switch(action.type) {
        case GET_USER:
          return action.payload
        default:
          return state
    }
}