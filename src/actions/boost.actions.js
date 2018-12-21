import { ADD_BOOST } from '../types'

export const addBoost = (value) => {
    return {
        type: ADD_BOOST,
        payload: value    
    }
}