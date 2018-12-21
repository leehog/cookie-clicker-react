import { ADD_FACTORY } from '../types'

const INITIAL_STATE = {
    factory: 0
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type){
        case ADD_FACTORY: {
            return {
                ...state,
                factory: action.payload
            }
        }
        default: {
            return state
        }
    }
}