import { ADD_COOKIE } from '../types'


const INITIAL_STATE = {
    cookies: 0
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type){
        case ADD_COOKIE: {
            return {
                cookies: state.cookies + action.payload
            }
        }
        default: {
            return state
        }
    }
}