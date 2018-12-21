import { ADD_BOOST } from '../types'

const INITIAL_STATE = {
    boost: 1
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type){
        case ADD_BOOST: {
            return {
                ...state,
                boost: action.payload
            }
        }
        default: {
            return state
        }
    }
}
